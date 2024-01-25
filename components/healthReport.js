const HealthReport = ({ data }) => {
  console.log(data);
  return (
    <div className='mt-10'>
      {Object.keys(data).map((categoryKey) => (
        <div key={categoryKey}>
          <h2 className='font-bold text-orange-400 mt-2'>
            {data[categoryKey].translate}
          </h2>
          {Object.keys(data[categoryKey]).map((key) => (
            <div key={key}>
              <div className='flex flex-col'>
                <div className='m-1'>
                  {!!data[categoryKey][key].translate &&
                    '检查项目:' + data[categoryKey][key].translate}
                  <div className='flex gap-x-8'>
                    <div>
                      {!!data[categoryKey][key].value &&
                        '检验结果:' + data[categoryKey][key].value}
                    </div>
                    <div>
                      {!!data[categoryKey][key].referenceRange &&
                        '参考范围:' +
                          (Array.isArray(data[categoryKey][key].referenceRange)
                            ? data[categoryKey][key].referenceRange[0] +
                              '-' +
                              data[categoryKey][key].referenceRange[1]
                            : data[categoryKey][key].referenceRange)}
                    </div>
                    <div>
                      {!!data[categoryKey][key].unit &&
                        '单位:' + data[categoryKey][key].unit}
                    </div>
                    <div>
                      {!!data[categoryKey][key].Tips &&
                        '提示:' + data[categoryKey][key].Tips}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className=''>
            {!!data[categoryKey].summary && '小结:' + data[categoryKey].summary}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthReport;
