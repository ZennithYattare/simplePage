/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const inputBox = [
	{
		id: "first-name",
		name: "firstName",
		type: "text",
		autoComplete: "given-name",
	},
	{
		id: "last-name",
		name: "lastName",
		type: "text",
		autoComplete: "family-name",
	},
	{
		id: "email-address",
		name: "email",
		type: "email",
		autoComplete: "email",
	},
	{
		id: "password",
		name: "password",
		type: "password",
		autoComplete: "current-password",
	},
];

const InputBox = ({ id, name, type, autoComplete }) => {
	return (
		<input
			id={id}
			name={name}
			type={type}
			autoComplete={autoComplete}
			required
			className="mx-auto mt-2 w-72 border-2 border-b-slate-200 border-r-slate-200 border-l-[#808080] border-t-[#808080] bg-slate-100 tracking-tighter focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800"
		/>
	);
};

const content = (
	<>
		<div className="flex h-screen w-screen place-items-center bg-[#55aaaa]">
			<div className="mx-1 w-[600px] min-w-[420px] max-w-xl border-4 border-t-slate-200 border-l-slate-200 border-r-[#808080] border-b-[#808080] bg-[#c0c0c0] shadow-[5px_5px_5px_black] sm:mx-auto">
				<div className="bg-gradient-to-r from-[#000281] to-[#1084d0] p-1 font-mono text-lg font-bold text-gray-50 transition duration-700 ease-in-out">
					Acitivity 1: Sign Up
				</div>

				<form
					className="mx-auto my-6 grid h-auto grid-cols-3 font-mono"
					action="#"
					method="POST"
				>
					<div className="col-span-2">
						<p className="mb-8 pl-10">
							Please enter your sign up information
						</p>
					</div>
					<div className="mx-auto">
						<button
							type="submit"
							className=" w-32 border-2 border-t-slate-200 border-l-slate-200 border-r-[#808080] border-b-[#808080] py-1 shadow-[2px_2px_2px_black] transition-colors hover:cursor-pointer hover:bg-zinc-400"
						>
							Sign Up
						</button>
					</div>
					<div className="pl-10">
						<div className="mt-2 h-7">
							<label htmlFor="first-name" className="">
								<span className="underline">F</span>
								irst name:
							</label>
						</div>
						<div className="mt-2 h-7">
							<label htmlFor="last-name" className="">
								<span className="underline">L</span>
								ast name:
							</label>
						</div>
						<div className="mt-2 h-7">
							<label htmlFor="email-address" className="">
								<span className="underline">E</span>
								mail address:
							</label>
						</div>
						<div className="mt-2 h-7">
							<label htmlFor="password" className="">
								<span className="underline">P</span>assword:
							</label>
						</div>
					</div>
					<div className="">
						{inputBox.map((input) => (
							<InputBox
								key={input.id}
								id={input.id}
								name={input.name}
								type={input.type}
								autoComplete={input.autoComplete}
							/>
						))}
					</div>

					<div className="col-span-3 mt-8 pl-12 pr-10">
						<input
							id="remember-me"
							name="remember-me"
							type="checkbox"
							className="h-4 w-4 border-gray-300 focus:ring-slate-200"
						/>
						<label
							htmlFor="remember-me"
							className="ml-2 text-sm text-gray-900 "
						>
							Remember me
						</label>
						<div className="float-right inline-block text-sm">
							<a
								href="#"
								className="font-medium text-gray-900 hover:underline"
							>
								Forgot your password?
							</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</>
);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>{content}</React.StrictMode>
);
