//import { CrudSkeleton } from "@/app/components/dashboard/skeletons";
import { Metadata } from "next";
import CertificateGenerator from "@/app/components/dashboard/certification/certificateGenerator";

export const metadata: Metadata = {
	title: "Generador de Certificado",
};

export default function OfferEditorPage() {
	return (
		<div className="w-full min-h-screen pt-12 pb-12 bg-gray-900">
			<CertificateGenerator />
		</div>
	);
}
