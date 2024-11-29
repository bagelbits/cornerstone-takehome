export type Diagnosis = {
  row_names: string;
  Action_Treatment_Other: string;
  Cause_1_Name: string;
  Cause_2_Name: string;
  Cause_3_Name: string;
  Severity: string;
  Action_1_Name: string;
  Action_2_Name: string;
  Action_3_Name: string;
  Visit: string;
  Prot: string;
  Event_Name: string;
  Subject: string;
  Start_Date: string;
  End_Date: string;
  Serious: string;
  Action_Withdrawn: string;
  Ongoing: string;
  Action_Treatment: string;
  Action_Other: string;
  Action_None: string;
  Cause: string;
  Drug_Related: string;
  Action_Drug_Dose: string;
  Action_Background_Dose: string;
  Action_Dose_1: string;
  Action_Dose_2: string;
  Action_Dose_3: string;
  Cause_1: string;
  Cause_2: string;
  Cause_3: string;
  cai_record_num: string;
};

export type ChartNode = {
  name: string;
  count: number;
};

export type DiagnosisSummary = {
  seriosness: ChartNode[];
  ongoing: ChartNode[];
  event_names: ChartNode[];
};
