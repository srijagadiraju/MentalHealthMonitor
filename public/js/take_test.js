function loadTest(content) {
  const testContainer = document.getElementById("test-container");
  testContainer.innerHTML = content;
}

function clearDirection() {
  const testDirection = document.getElementById("test-direction");
  testDirection.innerHTML = "";
}

function getTime() {
  const currentTime = new Date();
  return currentTime.toLocaleString();
}

document.getElementById("depression").addEventListener("click", () => {
  // Load the content for the "PHQ-9" test
  clearDirection();
  loadTest(phq_9);

  const phq9 = document.getElementById("phq9");

  //when user clicks submit
  phq9.addEventListener("submit", function (event) {
    event.preventDefault();
    //console.log("form submitted");

    //calculate test score
    const questionOneResponse = parseInt(document.getElementById("q1").value);
    const questionTwoResponse = parseInt(document.getElementById("q2").value);
    const questionThreeResponse = parseInt(document.getElementById("q3").value);
    const questionFourResponse = parseInt(document.getElementById("q4").value);
    const questionFiveResponse = parseInt(document.getElementById("q5").value);
    const questionSixResponse = parseInt(document.getElementById("q6").value);
    const questionSevenResponse = parseInt(document.getElementById("q7").value);
    const questionEightResponse = parseInt(document.getElementById("q8").value);
    const questionNineResponse = parseInt(document.getElementById("q9").value);

    const testScore =
      questionOneResponse +
      questionTwoResponse +
      questionThreeResponse +
      questionFourResponse +
      questionFiveResponse +
      questionSixResponse +
      questionSevenResponse +
      questionEightResponse +
      questionNineResponse;

    //type of test
    const testType = "depression";

    //to be implemented: user who's taking the test
    const user = "blabla";

    //submit request with user, test type, test score, and time
    const testData = {
      user,
      testType,
      testScore,
      time: getTime(),
    };
    //console.log(testData)

    //the /test route to be implemented
    fetch("/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });
  });
});

document.getElementById("anxiety").addEventListener("click", () => {
  // Load the content for the "GAD-7" test
  clearDirection();
  loadTest(gad_7);

  const gad7 = document.getElementById("gad7");

  //when user clicks submit
  gad7.addEventListener("submit", function (event) {
    event.preventDefault();

    //calculate test score
    const questionOneResponse = parseInt(document.getElementById("q1").value);
    const questionTwoResponse = parseInt(document.getElementById("q2").value);
    const questionThreeResponse = parseInt(document.getElementById("q3").value);
    const questionFourResponse = parseInt(document.getElementById("q4").value);
    const questionFiveResponse = parseInt(document.getElementById("q5").value);
    const questionSixResponse = parseInt(document.getElementById("q6").value);
    const questionSevenResponse = parseInt(document.getElementById("q7").value);

    const testScore =
      questionOneResponse +
      questionTwoResponse +
      questionThreeResponse +
      questionFourResponse +
      questionFiveResponse +
      questionSixResponse +
      questionSevenResponse;
    console.log(testScore);

    //type of test
    const testType = "anxiety";

    //to be implemented: user who's taking the test
    const user = "blabla";

    //submit request with user, test type, test score, and time
    const testData = {
      user,
      testType,
      testScore,
      time: getTime(),
    };

    //the /test route to be implemented
    fetch("/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });
  });
});

const phq_9 = `
<h2>PHQ-9 Test</h2>
<a class="btn btn-primary" href="take_test.html" role="button">Back</a>
<p>
  Over the last 2 weeks, how often have you been bothered by any of the
  following problems?
</p>

<!-- Questions for PHQ-9 -->
<form id="phq9">
  <fieldset>
    <label for="q1">1. Little interest or pleasure in doing things</label>
    <select name="q1" id="q1">
      <option value="0">Not at all</option>
      <option value="1">Several days</option>
      <option value="2">More than half the days</option>
      <option value="3">Nearly every day</option>
    </select>

    <label for="q2">2. Feeling down, depressed, or hopeless</label>
    <select name="q2" id="q2">
      <option value="0">Not at all</option>
      <option value="1">Several days</option>
      <option value="2">More than half the days</option>
      <option value="3">Nearly every day</option>
    </select>

    <label for="q3"
      >3. Trouble falling or staying asleep, or sleeping too much</label
    >
    <select name="q3" id="q3">
      <option value="0">Not at all</option>
      <option value="1">Several days</option>
      <option value="2">More than half the days</option>
      <option value="3">Nearly every day</option>
    </select>

    <label for="q4">4. Feeling tired or having little energy</label>
    <select name="q4" id="q4">
      <option value="0">Not at all</option>
      <option value="1">Several days</option>
      <option value="2">More than half the days</option>
      <option value="3">Nearly every day</option>
    </select>

    <label for="q5">5. Poor appetite or overeating</label>
    <select name="q5" id="q5">
      <option value="0">Not at all</option>
      <option value="1">Several days</option>
      <option value="2">More than half the days</option>
      <option value="3">Nearly every day</option>
    </select>

    <label for="q6"
      >6. Feeling bad about yourself — or that you are a failure or have
      let yourself or your family down</label
    >
    <select name="q6" id="q6">
      <option value="0">Not at all</option>
      <option value="1">Several days</option>
      <option value="2">More than half the days</option>
      <option value="3">Nearly every day</option>
    </select>

    <label for="q7"
      >7. Trouble concentrating on things, such as reading the newspaper
      or watching television
    </label>
    <select name="q7" id="q7">
      <option value="0">Not at all</option>
      <option value="1">Several days</option>
      <option value="2">More than half the days</option>
      <option value="3">Nearly every day</option>
    </select>

    <label for="q8"
      >8. Moving or speaking so slowly that other people could have
      noticed? Or the opposite — being so fidgety or restless that you
      have been moving around a lot more than usual
    </label>
    <select name="q8" id="q8">
      <option value="0">Not at all</option>
      <option value="1">Several days</option>
      <option value="2">More than half the days</option>
      <option value="3">Nearly every day</option>
    </select>

    <label for="q9"
      >9. Thoughts that you would be better off dead or of hurting
      yourself in some way</label
    >
    <select name="q9" id="q9">
      <option value="0">Not at all</option>
      <option value="1">Several days</option>
      <option value="2">More than half the days</option>
      <option value="3">Nearly every day</option>
    </select>
    <br>
    <button type="submit" class="submit-btn">Submit</button>
  </fieldset>
</form>
`;

const gad_7 = `
<h2>GAD-7 Test</h2>
<a class="btn btn-primary" href="take_test.html" role="button">Back</a>
  <p>
    Over the last two weeks, how often have you been bothered by the
    following problems?
  </p>

  <!-- Questions for GAD-7 -->
  <form id="gad7">
    <fieldset>
      <label for="q1">1. Feeling nervous, anxious, or on edge</label>
      <select name="q1" id="q1">
        <option value="0">Not at all</option>
        <option value="1">Several days</option>
        <option value="2">More than half the days</option>
        <option value="3">Nearly every day</option>
      </select>

      <label for="q2">2. Not being able to stop or control worrying</label>
      <select name="q2" id="q2">
        <option value="0">Not at all</option>
        <option value="1">Several days</option>
        <option value="2">More than half the days</option>
        <option value="3">Nearly every day</option>
      </select>

      <label for="q3">3. Worrying too much about different things</label>
      <select name="q3" id="q3">
        <option value="0">Not at all</option>
        <option value="1">Several days</option>
        <option value="2">More than half the days</option>
        <option value="3">Nearly every day</option>
      </select>

      <label for="q4">4. Trouble relaxing </label>
      <select name="q4" id="q4">
        <option value="0">Not at all</option>
        <option value="1">Several days</option>
        <option value="2">More than half the days</option>
        <option value="3">Nearly every day</option>
      </select>

      <label for="q5">5. Being so restless that it is hard to sit still</label>
      <select name="q5" id="q5">
        <option value="0">Not at all</option>
        <option value="1">Several days</option>
        <option value="2">More than half the days</option>
        <option value="3">Nearly every day</option>
      </select>

      <label for="q6">6. Becoming easily annoyed or irritable</label>
      <select name="q6" id="q6">
        <option value="0">Not at all</option>
        <option value="1">Several days</option>
        <option value="2">More than half the days</option>
        <option value="3">Nearly every day</option>
      </select>

      <label for="q7">7. Feeling afraid, as if something awful might happen</label>
      <select name="q7" id="q7">
        <option value="0">Not at all</option>
        <option value="1">Several days</option>
        <option value="2">More than half the days</option>
        <option value="3">Nearly every day</option>
      </select>
      <br>
      <button type="submit" class="submit-btn">Submit</button>
    </fieldset>
  </form>
`;
