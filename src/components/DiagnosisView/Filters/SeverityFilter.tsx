import { SyntheticEvent, useState } from "react";

import { Slider } from "@mui/material";

import { SearchParams } from "@/types/diagnoses";
import { range } from "@/utils/common";

type ComponentProps = {
  severity: {
    min: number;
    max: number;
  };
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
};

const PageComponent = ({
  severity,
  searchParams,
  setSearchParams,
}: ComponentProps) => {
  const [value, setValue] = useState<number[]>([severity.min, severity.max]);
  const marks = range(severity.min, severity.max).map((value) => ({
    value,
    label: value.toString(),
  }));

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const handleChangeCommitted = (
    _: SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    if (Array.isArray(newValue)) {
      setSearchParams({
        ...searchParams,
        severity: newValue.map((value) => value.toString()),
      });
    }
  };

  return (
    <Slider
      min={severity.min}
      max={severity.max}
      marks={marks}
      value={value}
      onChange={handleChange}
      onChangeCommitted={handleChangeCommitted}
      valueLabelDisplay="auto"
      getAriaValueText={(value) => `${value}`}
    />
  );
};

export default PageComponent;
