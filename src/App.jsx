

import './App.css';
import useNabla from './useNabla';

const App = () => {
	const {isLoading, noteSections, transcriptData, startRecording, generate } = useNabla();
	console.log(transcriptData)
	const newTranscriptData = transcriptData.join("\n")


	return (
		<div className="container">
			<h1>My EHR</h1>
			<div>
				<button id="start" onClick={startRecording} disabled={isLoading}>
					Start consultation
				</button>
				<button id="generate" onClick={generate} disabled={isLoading}>
					Generate note
				</button>
			</div>

			<div id="transcript" className="listen-results">
				<h3>Transcript:</h3>
				{transcriptData.map((item, index) => (
					<p key={index}>{item}</p>
				) )}
			</div>

			<div id="note" className="listen-results">
				<h3>Note:</h3>
				{
					noteSections.map((item, index) => (
						<div key={index}>
							<h4>{item.title}</h4>
							<p>{item.text}</p>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default App;
