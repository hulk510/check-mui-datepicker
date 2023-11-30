"use client";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format } from "date-fns";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date Picker"
        format="yyyy/MM/dd"
        value={value} // RangeError: Invalid time value
        onChange={(newValue) => {
          if (newValue === null) {
            return;
          }
          setValue(format(new Date(newValue), "yyyy/MM/dd"));
        }}
      />
      <p>{value}</p>
    </LocalizationProvider>
  );
}
