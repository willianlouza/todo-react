import { FieldValues, UseFormRegister } from "react-hook-form";

export interface DefaultProps {
  register: UseFormRegister<FieldValues>;
  errors: any;
  name: string;
}
