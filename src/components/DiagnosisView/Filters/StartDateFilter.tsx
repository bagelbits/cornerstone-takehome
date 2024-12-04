import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import { SearchParams } from "@/types/diagnoses";

type ComponentProps = {
  startDate: { min: Date; max: Date };
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
};

const PageComponent = ({
  startDate,
  searchParams,
  setSearchParams,
}: ComponentProps) => {
  const handleDateChange = (date: Dayjs | null) => {
    if (!date) {
      delete searchParams.startDate;
      setSearchParams({ ...searchParams });
      return;
    }
    setSearchParams({ ...searchParams, startDate: date?.format("YYYY-MM-DD") });
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Start Date"
        minDate={dayjs(startDate.min)}
        maxDate={dayjs(startDate.max)}
        value={searchParams.startDate ? dayjs(searchParams.startDate) : null}
        onChange={handleDateChange}
        sx={{ width: "100%" }}
        slotProps={{
          field: { clearable: true, onClear: () => handleDateChange(null) },
        }}
      />
    </LocalizationProvider>
  );
};

export default PageComponent;
