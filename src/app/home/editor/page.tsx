//import { CrudSkeleton } from "@/app/components/dashboard/skeletons";
import { Metadata } from "next";
import OfferEditor from "@/app/components/dashboard/editor/offerEditor";

export const metadata: Metadata = {
	title: "Editor de Ofertas",
};

export default function OfferEditorPage() {
	return (
		<div className="w-full min-h-screen pt-12 pb-12 bg-gray-900">
			<OfferEditor />
		</div>
	);
}
