//import { CrudSkeleton } from "@/app/components/dashboard/skeletons";
import { Metadata } from "next";
import Enrollment from "@/app/components/dashboard/enrollment/enrollment";

export const metadata: Metadata = {
	title: "Inscripción",
};

export default function EnrollmentPage() {
	return (
		<div className="w-full min-h-screen pt-12 pb-12 bg-gray-900">
			<Enrollment />
		</div>
	);
}
