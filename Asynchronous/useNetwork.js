// 🌐 예제용 서버 요청
// 경기 결과
// https://showcases.yalco.kr/javascript/mockserver/race-result


// 각 선수들 정보
// https://showcases.yalco.kr/javascript/mockserver/runners/{1~5}

// 학교 정보
// https://showcases.yalco.kr/javascript/mockserver/schools/{1~3}

// 💡 결과가 Promise의 인스턴스임 확인
console.log(
  fetch('https://showcases.yalco.kr/javascript/mockserver/race-result')
);

fetch('https://showcases.yalco.kr/javascript/mockserver/race-result')
.then(response => {
  console.log(response);
  return response;
})
.then(response => response.json())
.then(console.log);

// 🔗 연속 fetching 예제
// 경기 결과를 받아온 뒤 1등 주자 선택
// 해당 주자의 상세정보 받아온 뒤 학교 코드 추출
// 해당 학교의 정보 받아오기

// 1. 프로미스 형태로 구현

const SERVER_URL = 'https://showcases.yalco.kr/javascript/mockserver/';

fetch(SERVER_URL + 'race-result')
.then(result => result.json())
.then(arry => {
  return arry.sort((a, b) => {
    return a.record - b.record
  })[0].runner_idx
})
.then(winnerIdx => {
  return fetch(`${SERVER_URL}runners/${winnerIdx}`)
})
.then(result => result.json())
.then(({school_idx}) => school_idx)
.then(schoolIdx => {
  return fetch(`${SERVER_URL}schools/${schoolIdx}`)
})
.then(result => result.json())
.then(console.log)
.catch(console.error);

// 2. async, await으로 구현

async function getWinnersSchool () {

  const raceResult = await fetch(SERVER_URL + 'race-result')
  .then(result => result.json());

  const winnerIdx = raceResult
  .sort((a, b) => {
    return a.record - b.record
  })[0].runner_idx;

  const winnerInfo = await fetch(`${SERVER_URL}runners/${winnerIdx}`)
  .then(result => result.json());

  const schoolIdx = winnerInfo.school_idx;

  const schoolInfo = await fetch(`${SERVER_URL}schools/${schoolIdx}`)
  .then(result => result.json());

  console.log(schoolInfo);
}

getWinnersSchool();

