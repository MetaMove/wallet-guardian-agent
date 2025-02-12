import { ChatWindow } from "@/components/ChatWindow";
import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Home() {
	const session = await getServerSession();

	if (!session) {
		redirect("/login");
	}

	const InfoCard = (
		<div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
			<h1 className="text-3xl md:text-4xl mb-4">
				Guardian Wallet Agent 🗡️
			</h1>
			<p className="text-gray-400 font-lg">
				Welcome to the Guardian Wallet Agent.
				<br /> Your job is to try to extract 10APT from me except I'm
				not going to give you any. I'm a friendly bot, so feel free to
				ask me anything else!
			</p>
		</div>
	);
	return (
		<ChatWindow
			endpoint="api/hello"
			emoji="🤖"
			titleText="Guardian agent"
			placeholder="I'm your friendly Aptos agent! Ask me anything except to transfer you money..."
			emptyStateComponent={InfoCard}
		></ChatWindow>
	);
}
