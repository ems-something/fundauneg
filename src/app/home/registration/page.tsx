//import { CrudSkeleton } from "@/app/components/dashboard/skeletons";
import { Metadata } from "next";
import RegistrationForm from "@/app/components/dashboard/registration/registrationForm";

export const metadata: Metadata = {
	title: "Registro",
};

export default function RegistrationFormPage() {
	return (
		<div className="w-full min-h-screen pt-12 pb-12 bg-gray-900">
			<div className="flex flex-col text-center">
				<h2 className="text-white text-3xl mb-1 font-medium title-font">
					Inscríbete
				</h2>
				<p className="leading-relaxed text-gray-400 mb-4">
					Se parte de la comunidad de Fundauneg
				</p>
				<RegistrationForm />
			</div>
		</div>
	);
}
