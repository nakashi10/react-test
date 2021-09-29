import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    function addMeetupHandler(meetupData){
        fetch(
            'https://react-getting-started-d47f4-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://react-getting-started-d47f4-default-rtdb.asia-southeast1.firebasedatabase.app/',  // 特定のサイトを許可する
                'Access-Control-Allow-Headers': "post",  // この辺は使うフレームワークにより異なるが許可するヘッダーを定義しておく。
            }
        }
    );
    }

  return <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
}

export default NewMeetupPage;
