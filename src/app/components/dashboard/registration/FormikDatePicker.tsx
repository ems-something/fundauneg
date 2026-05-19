import { useFormikContext } from "formik";
import { CustomDatePicker } from "@/app/components/dashboard/Atoms/CustomDatePicker";

export const FormikDatePicker = ({ name, ...props }: any) => {
	const { values, setFieldValue } = useFormikContext<any>();

	return (
		<CustomDatePicker
			{...props}
			dateSelected={values[name]}
			setDateSelected={(value: any) => setFieldValue(name, value)}
		/>
	);
};
