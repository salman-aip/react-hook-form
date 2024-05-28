import FormWithErrorMessage from "@/components/form-with-error-message";
import FormWithNestedObjectAndArray from "@/components/form-with-nested-object-and-array";
import FormWithRegisterValidation from "@/components/form-with-register-validation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black">
      {/* <FormWithRegisterValidation /> */}
      {/* <FormWithErrorMessage /> */}
      <FormWithNestedObjectAndArray />
    </main>
  );
}
