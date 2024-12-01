import { SyntheticEvent } from "react";

import { Autocomplete, TextField } from "@mui/material";

import { SearchParams } from "@/types/diagnoses";

type ComponentProps = {
  events: string[];
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
};

const PageComponent = ({
  events,
  searchParams,
  setSearchParams,
}: ComponentProps) => {
  const handleEventSelection = (_: SyntheticEvent, newValue: string[]) => {
    setSearchParams({
      ...searchParams,
      events: newValue,
    });
  };
  return (
    <Autocomplete
      multiple
      options={events}
      onChange={handleEventSelection}
      renderInput={(params) => <TextField {...params} label="Events" />}
    />
  );
};

export default PageComponent;
