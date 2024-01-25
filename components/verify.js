import { z } from 'zod';

const verify = (Output) => {
  const schema = z.object({
    weightAndHeight: z.object({
      weight: z
        .object({
          value: z.number(),
          referenceRange: z.array(z.number()),
          unit: z.string(),
          Tips: z.string().optional(),
        })
        .refine(
          (data) => {
            return (
              data.value >= 0 &&
              data.unit === 'kg' &&
              data.referenceRange.length === 2 &&
              data.referenceRange[0] === 0 &&
              data.referenceRange[1] === 200
            );
          },
          { message: 'Validation failed in weight' }
        ),
      height: z
        .object({
          value: z.number(),
          referenceRange: z.array(z.number()),
          unit: z.string(),
          Tips: z.string().optional(),
        })
        .refine(
          (data) => {
            return (
              data.value >= 0 &&
              data.unit === 'cm' &&
              data.referenceRange.length === 2 &&
              data.referenceRange[0] === 50 &&
              data.referenceRange[1] === 300
            );
          },
          { message: 'Validation failed in height' }
        ),
      BMI: z
        .object({
          value: z.number(),
          referenceRange: z.array(z.number()),
          // unit: z.string(),
          Tips: z.string().optional(),
        })
        .refine(
          (data) => {
            return (
              data.value >= 0 &&
              data.referenceRange.length === 2 &&
              data.referenceRange[0] === 18.5 &&
              data.referenceRange[1] === 24
            );
          },
          { message: 'Validation failed in BMI' }
        ),
      summary: z.string(),
    }),
    bloodPressure: z.object({
      systolicPressure: z
        .object({
          value: z.number(),
          referenceRange: z.array(z.number()),
          unit: z.string(),
          Tips: z.string().optional(),
        })
        .refine(
          (data) => {
            return (
              data.value >= 0 &&
              data.unit === 'mmHg' &&
              data.referenceRange.length === 2 &&
              data.referenceRange[0] === 90 &&
              data.referenceRange[1] === 140
            );
          },
          { message: 'Validation failed in systolicPressure' }
        ),
      diastolicPressure: z
        .object({
          value: z.number(),
          referenceRange: z.array(z.number()),
          unit: z.string(),
          Tips: z.string().optional(),
        })
        .refine(
          (data) => {
            return (
              data.value >= 0 &&
              data.unit === 'mmHg' &&
              data.referenceRange.length === 2 &&
              data.referenceRange[0] === 60 &&
              data.referenceRange[1] === 90
            );
          },
          { message: 'Validation failed in diastolicPressure' }
        ),
      summary: z.string(),
    }),
    electrocardiogram: z.object({
      electrocardiogram: z.object({
        value: z.string(),
        referenceRange: z.string(),
        Tips: z.string().optional(),
      }),
      summary: z.string(),
    }),
    // BModeUltrasonography: z.string(),
    // colorThyroidUltrasound: z.string(),
    // "summary":"无异常": z.object({ chestCT: z.string(), summary: z.string() }),
    // bloodRoutineExamination: z.object({
    //   whiteBloodCellCount: z.number(),
    //   redBloodCellCount: z.number(),
    //   neutrophilCount: z.number(),
    //   neutralCellRatio: z.number(),
    //   lymphocyteCount: z.number(),
    //   lymphocyteRatio: z.number(),
    //   monocyteCount: z.number(),
    //   monocyteRatio: z.number(),
    //   eosinophilicCounts: z.number(),
    //   eosinophilicRatio: z.number(),
    //   basophilCount: z.number(),
    //   basophilicGranulocyteRatio: z.number(),
    //   erythrocyteDistributionWidthCV: z.number(),
    //   erythrocyteDistributionWidthSD: z.number(),
    //   meanErythrocyteVolume: z.number(),
    //   hematocrit: z.number(),
    //   hemoglobin: z.number(),
    //   averageHemoglobinVolume: z.number(),
    //   averageHemoglobinConcentration: z.number(),
    //   plateletCount: z.number(),
    //   plateletAccumulation: z.number(),
    //   meanPlateletVolume: z.number(),
    //   largePlateletRatio: z.number(),
    //   summary: z.string(),
    // }),
    // basicMetabolicPanel: z.object({
    //   glutamicPyruvicTransaminase: z.number(),
    //   glutamicOxalaceticTransaminase: z.number(),
    //   totalProtein: z.number(),
    //   albumin: z.number(),
    //   globulin: z.number(),
    //   AGRatio: z.number(),
    //   totalBilirubin: z.number(),
    //   directBilirubin: z.number(),
    //   indirectBilirubin: z.number(),
    //   alkalinePhosphatase: z.number(),
    //   lactateDehydrogenase: z.number(),
    //   alanineAminotransferase: z.number(),
    //   creatineKinase: z.number(),
    //   creatineKinaseMB: z.number(),
    //   totalSerumBileAcids: z.number(),
    //   bloodUreaNitrogen: z.number(),
    //   creatinine: z.number(),
    //   uricAcid: z.number(),
    //   bloodGlucose: z.number(),
    //   totalCholesterol: z.number(),
    //   triglycerides: z.number(),
    //   highDensityLipoproteinCholesterol: z.number(),
    //   lowDensityLipoproteinCholesterol: z.number(),
    //   summary: z.string(),
    // }),
    // CEAAFPCA199: z.object({
    //   AlphaFetoprotein: z.number(),
    //   carcinoembryonicAntigen: z.number(),
    //   cancerAntigen: z.number(),
    //   summary: z.string(),
    // }),
  });

  try {
    const data = schema.parse(JSON.parse(Output));
    console.log('数据验证通过：', data);
  } catch (error) {
    console.error('数据验证失败：', error);
  }
};

export default verify;
/*{
    "weightAndHeight":{"weight": 70.5,
 "height": 175,"summary":"正常"},
 "bloodPressure": {
 "systolicPressure": 120,
"diastolicPressure": 80,
"summary":"正常"
 }}*/
