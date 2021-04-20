import Education from './Education';

const EduationPanel = () => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Education className="inline align-text-bottom mb-0.5 mr-2" />
      Education
    </h2>
    <ul className="list-disc pl-6">
      <li className="mb-3">
        <div className="flex mb-2 items-center">
          <span className="flex-1 text-xl font-bold">Nanjing University of Posts and Intercommunication</span>
          <span className="flex-none text-sm">2012 - 2015</span>
        </div>
        <div className="text-sm">Information Network / Masters Degree</div>
      </li>
      <li className="mb-3">
        <div className="flex mb-2 w items-center">
          <span className="flex-1 text-xl font-bold">Chengdu University of Information Technology</span>
          <span className="flex-none text-sm">2008 - 2012</span>
        </div>
        <div className="text-sm">Information Security / Bachelors Degree</div>
      </li>
    </ul>
  </>
);

export default EduationPanel;
