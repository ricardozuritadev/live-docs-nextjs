import { Editor } from "@/components/editor/Editor";
import Header from "@/components/ui/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Document() {
    return (
        <main>
            <Header>
                <div className="flex w-fit items-center justify-center gap-2">
                    <p className="document-title">
                        This is a fake document tile
                    </p>
                </div>

                <SignedOut>
                    <SignInButton />
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Header>

            <Editor />
        </main>
    );
}
