<img width="800" src="https://github.com/KHW1025/Gangwon-Pet-Trip/assets/119498531/3dacb9f8-5466-48d3-a81b-c689ed2e9978"/>

# Gangwon-Pet-Trip
<br>

> **강원 펫 트립**
<br>

## 1️⃣ 목적 & 구성
<br>

> - 반려동물과 함께 강원도를 여행하고자 하는 이용자들에게 각 여행지의 위치와 정보 제공
> - [강원도 반려동물 동반관광 API시스템](https://www.pettravel.kr/petapi/api) 에서 제공하는 API를 활용
> - 데이터를 JSON 파일로 재가공

### - 페이지 구성
```
<App>

    <Header />

    <Main />
        <MainBanner />
        <MainMap />
            <Map />
        <KeywordRecommend />
            <CardSlide />
                <ListCard />
        <Hospital />

    <City />
        <FoodCate />
            <CateCardSlide />
                <ListCard />
        <ExperienceCate />
            <CateCardSlide />
                <ListCard />
        <HotelCate />
            <CateCardSlide />
                <ListCard />

    <Category />
        <CateList />
            <ListCard />
        <Pagination />

    <Detail />
        <DetailInfoList />
            <DetailIntro />
            <DetailPrice />
            <DetailCaution />
            <RecommendPlace />

    <Footer />
```
<br>

## 2️⃣ 프로젝트 역할
<br>

> - 김현우 : 기획, 디자인(100%), 개발(100%)
> - [오정석](https://github.com/jeong0214) : 기획 
<br>

 ## 3️⃣ 프로젝트 사용 툴
 
 ### Communication
 
>![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
>![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
 
 ### Environment
 
> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/> 

>![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
>![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
>![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             


### Development

> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<br>

## 4️⃣ 기획 & 설계 시안
<br>

> - [약식기획서 (figjam)](https://www.figma.com/file/zP3ONk3pY9sfOYamSRjl0N/with-my-pet?type=whiteboard&t=GIJbVjxciEZG0fYb-1)
> - [설계 시안 (figma)](https://www.figma.com/file/1JIeWlzenjTkxptlkc70tX/Project4-Gangwon-Pet-Trip?type=design&node-id=0%3A1&t=GIJbVjxciEZG0fYb-1)
<br>

## 5️⃣ 이슈 히스토리 
<br>
> 1. 빈 데이터와 오류가 생기는 데이터들이 있어 API 활용 단계에서 JS코드를 활용해 API의 데이터들을 JSON파일로 재가공했습니다. 
> <img src="https://user-images.githubusercontent.com/119498531/235096445-11dcdfa4-146d-4220-ae78-ba2a094eee92.png">

```const https = require("https");
const querystring = require("querystring");
const fs = require("fs");
const baseUrl = "https://www.pettravel.kr/api/detailSeqPart.do";
const allData = [];
for (let i = 1; i <= 5; i++) {
  // PC01 ~ PC05
  for (let j = 1; j <= 500; j++) {
    // contentNum 1 ~ 500
    const queryParams = querystring.stringify({
      partCode: "PC" + i.toString().padStart(2, "0"),
      contentNum: j,
    });
    const url = `${baseUrl}?${queryParams}`;
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          const jsonData = JSON.parse(data);
          if (jsonData.length > 0 && jsonData[0].errorCode !== "ERR_03") {
            allData.push(...jsonData);
          }
          if (i === 5 && j === 500) {
            const fileName = "allData.json";
            fs.writeFile(fileName, JSON.stringify(allData), (err) => {
              if (err) {
                console.error(err);
              } else {
                console.log(`All data saved to file ${fileName}`);
              }
            });
          }
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  }
}
```
<br>
<br>

> 2. 기존 클릭시 클릭을 제외한 모든 요소에 'on'클래스를 제거하고 클릭한 요소에만 'on'클래스를 붙여 <br>
>    css요소를 추가하거나 기능이 구현되는 것을 document.qurearySelect로 불러와 forEach문을 활용했지만<br>
>    react에서 개발할때는 제한이 있음을 느꼈습니다. map함수로 만든 요소에 클릭할 시 useState의 setSelectedAreaLink에 <br>
>    배열값을 넣고 className에 selectedAreaLink의 값이 넣은 배열의 값과 같다면 'on'클래스가 붙게 하는 방법을 활용했습니다.
```
{areaNames.map((name, i) => (
            <Link
              to="#"
              key={i}
              className={`${areaClass[i]} ${
                selectedAreaLink === areaNames[i] ? "on" : ""
              }`}
              onClick={() => {
                setSelectedAreaLink(areaNames[i]);
              }}
            >
              <i className="fa-solid fa-location-dot mapPin"></i>
              <span>{name}</span>
            </Link>
          ))}
```
<br>
<br>

> 3. 데이터 필터링을 하기위해 filter함수를 사용했지만 부정의 의미인 "!" 를 사용했지만 작동하지 않았습니다.<br>
>    "!" 가 "===" 보다 연산자 순위가 높은것을 확인하고 괄호로 처리해준다음 "!"를 붙여줬습니다.
```
let selectedCityData = list.filter(
    (item) =>
      item.resultList.areaName.includes(selectedCity) &&
      !(item.resultList.partName === "동물병원")
  );
```
<br>
<br>

> 4. 페이지 내에서 select요소로 지역을 변경하면 useState의 변수뿐만 아니라 url자체도 바뀌지 않았습니다.<br>
>    해결 방법으로 useEffect와 window.history.replaceState를 활용했습니다.
```
useEffect(() => {
    window.history.replaceState("", "", `/city/${selectedCity}`);
  }, [selectedCity]);
```
<br>
<br>

> 5. 이전 페이지에서 useParams로 가져온 카테코리명에 따라 배너의 이미지의 url이 바뀌어야했는데<br>
>    css에서 넣는 방식과 동일하게 작성했더니 작동되는 배경의 주소와 변수로 집어넣은 주소가 console창에 찍히는게<br>
>    다르다는것을 확인했습니다. css에서 작성한 주소가 아니기 때문에 경로 앞에 ${process.env.PUBLIC_URL}를 붙여주고<br>
>    styled-component를 install하여 사용했습니다.
```
let categoryUrl =
    categoryName === "food"
      ? `${process.env.PUBLIC_URL}/img/categoryBg1.jpg`
      : categoryName === "experience"
      ? `${process.env.PUBLIC_URL}/img/categoryBg2.jpg`
      : categoryName === "hotel"
      ? `${process.env.PUBLIC_URL}/img/categoryBg3.jpg`
      : "";

  let BannerTitle = styled.section`
    background-image: url(${categoryUrl});
  `;
```
<br>

## 6️⃣ 화면구성 📺
<br>

> - 메인화면
> <img width="350" alt="image" src="https://github.com/KHW1025/Gangwon-Pet-Trip/assets/119498531/c9acf737-5132-443b-b59c-8692939b83d0">

<br>
<br>

> - 검색모달
> <img width="350" alt="image" src="https://github.com/KHW1025/Gangwon-Pet-Trip/assets/119498531/737f2775-7cbc-4c64-8af5-d618ad17f2cc">

<br>
<br>

> - 지역 페이지
> <img width="350" alt="image" src="https://github.com/KHW1025/Gangwon-Pet-Trip/assets/119498531/c6205568-60e8-4bf6-b318-4ab0692300fd">

<br>
<br>

> - 카테고리 페이지
> <img width="350" alt="image" src="https://github.com/KHW1025/Gangwon-Pet-Trip/assets/119498531/bb9a785c-95e1-4a66-bca0-2db76e4cc61a">

<br>
<br>

> - 디테일 페이지
> <img width="350" alt="image" src="https://github.com/KHW1025/Gangwon-Pet-Trip/assets/119498531/47478fad-d11a-42bb-810e-6e0925dbee71">

<br>
<br>

> - 병원 지도 페이지
> <img width="350" alt="image" src="https://github.com/KHW1025/Gangwon-Pet-Trip/assets/119498531/da8ac140-5d64-4f52-9887-374c7520ff96">
