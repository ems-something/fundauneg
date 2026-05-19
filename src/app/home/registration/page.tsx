//import { CrudSkeleton } from "@/app/components/dashboard/skeletons";
import { Metadata } from "next";
import RegistrationForm from "@/app/components/dashboard/registration/registrationForm";

export const metadata: Metadata = {
	title: "Registro",
};

export default function RegistrationFormPage() {
	return (
		<div className="w-full min-h-screen pt-12 pb-12 bg-gray-900">
			<RegistrationForm />
		</div>
	);
}
