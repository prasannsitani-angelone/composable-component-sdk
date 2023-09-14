<main>
	<div class="flex flex-col px-2 justify-end">
		<div class="flex bg-gray-800 w-fit py-1 px-2 mb-3 items-center gap-1 rounded-full">
			<svg
				class="h-3 w-3 text-white"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="20 12 20 22 4 22 4 12" />{' '}
				<rect x="2" y="7" width="20" height="5" />{' '}
				<line x1="12" y1="22" x2="12" y2="7" />{' '}
				<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />{' '}
				<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
			</svg>
			<p class="text-xs text-white">Send gift</p>
		</div>
		<div class="flex flex-col gap-4">
			<div class="flex gap-4 items-center">
				<div class="avatar">
					<div class="w-8 ring rounded-full ring-offset-base-100 ring-offset-2 p-1">
						<img
							class="rounded-full"
							src="https://randomuser.me/api/portraits/women/81.jpg"
							alt=""
						/>
					</div>
				</div>
				<div>
					<p class="text-xs text-white font-bold">artbytraveler</p>
				</div>
				<button
					class="btn btn-outline btn-sm text-xs text-white lowercase focus:outline-none"
					onClick={() => {}}
				>
					{`Follow`}
					<!-- {isFollwer() ? `Following` : `Follow`} -->
				</button>
			</div>

			<div class="flex w-fit">
				<p class="text-sm text-white line-clamp-1 text-left">
					Share with your friends in Bangalore sassa asa sas cascsac cscas csacs
				</p>
			</div>
		</div>

		<div class="flex gap-2 items-center">
			<div class="flex -space-x-0.5">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					class="inline-block h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-800"
					src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
					alt="Image Description"
				/>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					class="inline-block h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-800"
					src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
					alt="Image Description"
				/>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					class="inline-block h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-800"
					src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
					alt="Image Description"
				/>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					class="inline-block h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-800"
					src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
					alt="Image Description"
				/>
			</div>
			<div>
				<p class="text-xs text-white">Liked by user_name and 23706 others</p>
			</div>
		</div>
	</div>
</main>
