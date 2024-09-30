import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css'; // 외부 CSS 파일 import
// import YouTube from "react-youtube";
// import LiteYouTubeEmbed from 'react-lite-youtube-embed';
// import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const fireRecords = [
  { id: 1, date: '2024-03-01', description: 'Fire detected in Sector A' },
  { id: 2, date: '2024-03-02', description: 'Fire detected in Sector B' },
  { id: 3, date: '2024-03-03', description: 'Fire detected in Sector C' },
  { id: 4, date: '2024-03-01', description: 'Fire detected in Sector A' },
  { id: 5, date: '2024-03-02', description: 'Fire detected in Sector B' },
  { id: 6, date: '2024-03-03', description: 'Fire detected in Sector C' },
  { id: 7, date: '2024-03-01', description: 'Fire detected in Sector A' },
  { id: 8, date: '2024-03-02', description: 'Fire detected in Sector B' },
  { id: 9, date: '2024-03-03', description: 'Fire detected in Sector C' },
  { id: 10, date: '2024-03-01', description: 'Fire detected in Sector A' },
  { id: 11, date: '2024-03-02', description: 'Fire detected in Sector B' },
  { id: 12, date: '2024-03-03', description: 'Fire detected in Sector C' },
  { id: 13, date: '2024-03-01', description: 'Fire detected in Sector A' },
  { id: 14, date: '2024-03-02', description: 'Fire detected in Sector B' },
  { id: 15, date: '2024-03-03', description: 'Fire detected in Sector C' },
  { id: 16, date: '2024-03-01', description: 'Fire detected in Sector A' },
  { id: 17, date: '2024-03-02', description: 'Fire detected in Sector B' },
  { id: 18, date: '2024-03-03', description: 'Fire detected in Sector C' },
  { id: 19, date: '2024-03-01', description: 'Fire detected in Sector A' },
  { id: 20, date: '2024-03-02', description: 'Fire detected in Sector B' },
  { id: 21, date: '2024-03-03', description: 'Fire detected in Sector C' },
  { id: 22, date: '2024-03-01', description: 'Fire detected in Sector A' },
  { id: 23, date: '2024-03-02', description: 'Fire detected in Sector B' },
  { id: 24, date: '2024-03-03', description: 'Fire detected in Sector C' }
];

function FireRecord({ date, description, onClick }) {
  return (
    <li onClick={onClick} style={{ fontSize: '12px', marginLeft: '40px', marginTop: '10.5px', color: '#ffffff'}}>
      {date} - {description}
    </li>
  );
}

function LayoutComponent() {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=af27bbf8318dbd768731cfb95bc6c874&lang=kr&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(' - ');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getWeather();
  }, []);

  const handleRecordClick = (record) => {
    setSelectedRecord(record);
  };

  return (
    <div id="wrap">
      <div id="house"></div>
      <div id="header">
        <div id = "animal"></div>
        <div id="header_name">
        <div id="rain"></div>
        <div id="star1"></div>
        <div id="star2"><p>여우별 : 기숙사 화재 감지 시스템</p></div>
        {weatherData && (
        <div id="weather-info">
          <p>오늘의 날씨: {weatherData.weather[0].description}</p>
          <p>현재 기온: {weatherData.main.temp}°C</p>
        </div>
      )}
      {error && <p>{error}</p>}
        </div>
      </div>
      <div id="one1">
        <div id = "precautions">
          <p>흡연예방</p>
          <p>화재예방,</p>
          <p>꺼진 불도</p>
          <p>다시 보자!</p>
        </div>
      </div>
      <div id="one2">
        <div id = "ciga"></div>
      </div>
      <div id="back2"></div>
      <div id="back2_2">
        <div id="han1">
          <p>1관</p>
        </div>
        <div id="han2">
          <p>2관</p>
        </div>
        <div id="han3">
          <p>3관</p>
        </div>
        <div id="han4">
          <p>4관</p>
        </div>
        <div id="han5">
          <p>5관</p>
        </div>
        <div id="han6">
          <p>6관</p>
        </div>
        <div id="han7">
          <p>7관</p>
        </div>
        <div id="han8">
          <p>8관</p>
        </div>
        <div id="sol1"></div>
        <div id="sol2"></div>
        <div id="sol3"></div>
        <div id="sol4"></div>
      </div>
      <div id="rside">
        <div className="FireRecords">
          <div id="rside_name">
            <div id="rside_name2">
              <p>화재 감지 여우별 - Fire Log</p>
            </div>
          </div>
          <ul>
            {fireRecords.map(record => (
              <FireRecord
                key={record.id}
                date={record.date}
                description={record.description}
                onClick={() => handleRecordClick(record)}
              />
            ))}
          </ul>
        </div>
      </div>
      <div id="lside">
        <div id="lside_name">
        <div id = "student3"><p>학생생활관 4관 여우별 - 4층 복도</p></div>
        </div>
        <div className="CameraScreenGrid">
        {/* <YouTube
          videoId="L2vS_050c-M" //동영상 주소
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 1, //자동 재생 여부 
              modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
              loop: 1, //반복 재생
              playlist: "L2vS_050c-M", //반복 재생으로 재생할 플레이 리스트
            },
          }}
          onReady={(e) => {
            e.target.mute(); //소리 끔
          }}
        /> */}
        </div>
      </div>
      <div id="lside2">
        <div id="lside_name2">
        <div id = "student2"><p>학생생활관 2관 여우별 - 1층 복도</p></div>
        </div>
        <div className="CameraScreenGrid2">
        {/* <YouTube
          videoId="L2vS_050c-M" //동영상 주소
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 1, //자동 재생 여부 
              modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
              loop: 1, //반복 재생
              playlist: "L2vS_050c-M", //반복 재생으로 재생할 플레이 리스트
            },
          }}
          onReady={(e) => {
            e.target.mute(); //소리 끔
          }}
        /> */}
        </div>
      </div>
      <div id="lside3">
        <div id="lside_name3">
          <div id = "student4"><p>학생생활관 8관 여우별 - 11층 복도</p></div>
        </div>
        <div className="CameraScreenGrid3">
        {/* <YouTube
          videoId="L2vS_050c-M" //동영상 주소
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 1, //자동 재생 여부 
              modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
              loop: 1, //반복 재생
              playlist: "L2vS_050c-M", //반복 재생으로 재생할 플레이 리스트
            },
          }}
          onReady={(e) => {
            e.target.mute(); //소리 끔
          }}
        /> */}
        </div>
      </div>
      <div id="bottom">
        <div id = "warning"></div>
        <div id = "warning2"><p>기숙사 화재 경보 현황</p></div>
        <div id="bottom_name">
          <div id = "student1"><p>학생생활관 3관 여우별 - 5층 복도</p></div>
        </div>
        <iframe title="FireScreen" src="http://10.50.240.59:8000/index.html" width="565" height="230" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default LayoutComponent;
