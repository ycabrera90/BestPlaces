import { useRouter } from "next/router";

import NewPlaceForm from "../../components/NewPlaceForm/NewPlaceForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-place", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    router.push("/");
  }
  return <NewPlaceForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
