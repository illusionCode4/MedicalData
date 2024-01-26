'use client';
import React, { useState } from 'react';
import jsyaml from 'js-yaml';
import { CopyButton } from '@/components/copyButton';
import { Button } from '@/components/ui/button';
import verify from '@/components/verify';
import useStore from '@/store/useStore';
import { useRouter } from 'next/navigation';
//
const JsonToYamlConverter = () => {
  const [Input, setInput] = useState('');
  const [Output, setOutput] = useState('');
  const [ver, setVer] = useState(false);
  const router = useRouter();
  const setJsonData = useStore((state) => state.setJsonData);

  const convertJsonToYaml = () => {
    try {
      const yamlContent = jsyaml.dump(JSON.parse(Input));
      setOutput(yamlContent);
    } catch (error) {
      alert('Error converting JSON to YAML. Check your input.');
    }
  };

  const convertYamlToJson = () => {
    try {
      const jsonObject = jsyaml.load(Input);
      setOutput(JSON.stringify(jsonObject, null, 2));

      verify(JSON.stringify(jsonObject, null, 2));
      setVer(true);
    } catch (error) {
      alert('Error converting YAML to JSON. Check your input.');
    }
  };
  const goToH = () => {
    setJsonData(Output);
    router.push('/healthy');
  };

  const clear = () => {
    setInput('');
    setOutput('');
  };

  return (
    <>
      <h1 className='text-3xl font-bold mt-10 flex justify-center'>
        JSON YAML Converter
      </h1>
      <div className='flex items-center justify-center mt-4 gap-x-4'>
        <textarea
          className='w-[800px] h-[600px] p-2 m-4 border-2 rounded-xl'
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter here...'
        />
        <div className='flex flex-col'>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-xl overflow-hidden whitespace-nowrap hover:bg-blue-700 mb-4'
            onClick={convertJsonToYaml}
          >
            ToYAML
          </button>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-xl overflow-hidden whitespace-nowrap hover:bg-blue-700 mb-4'
            onClick={convertYamlToJson}
          >
            ToJsonAndVerify
          </button>
          <Button
            disabled={!ver}
            variant='default'
            size='sm'
            className='mb-4'
            onClick={goToH}
          >
            DataDetail
          </Button>
          <Button
            onClick={clear}
            disabled={!Output || !Input}
            variant='default'
            size='sm'
            className='mb-4'
          >
            Clear
          </Button>
          <CopyButton value={Output || ''} />
        </div>
        <textarea
          className='w-[800px] h-[600px] p-2 m-4 border-2 rounded-xl'
          value={Output}
          placeholder='Something will appear here...'
          readOnly
        />
      </div>
    </>
  );
};

export default JsonToYamlConverter;
