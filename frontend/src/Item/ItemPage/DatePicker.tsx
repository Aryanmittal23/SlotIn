import { DateTimePicker } from '@mantine/dates';
import "./DatePicker.css"

export default { title: 'DateTimePicker' };
export function Usage() {
    return (
      <div style={{ padding: 40, maxWidth: 400 }}>
        <DateTimePicker
          placeholder="Date time picker"
          defaultValue={new Date(2022, 3, 11)}
          clearable
        />
      </div>
    );
  }