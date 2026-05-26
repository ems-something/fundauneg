//import { CrudSkeleton } from "@/app/components/dashboard/skeletons";
import { Metadata } from "next";
import Invoicing from "@/app/components/dashboard/invoicing/invoicing";

export const metadata: Metadata = {
	title: "Facturas",
};

export default function EnrollmentPage() {
	return (
		<div className="w-full min-h-screen pt-12 pb-12 bg-gray-900">
			<Invoicing />
		</div>
	);
}
