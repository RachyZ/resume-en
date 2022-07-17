import Header from './components/Header';
import SkillsPanel from './components/SkillsPanel';
import CareerPanel from './components/CareerPanel';
import OpenSourcePanel from './components/OpenSourcePanel';
import SharePanel from './components/SharePanel';
import EduationPanel from './components/EduationPanel';

export default function Resume() {
  return (
    <>
      <Header
        name="Rachy Zhang"
        title="TS"
        mobile="17816145080"
        experience="7"
        email="rachyz@163.com"
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <CareerPanel />
      {/* <div className="border-b my-5 border-gray-800 border-opacity-25"></div> */}
      {/* <OpenSourcePanel /> */}
      {/* <div className="border-b my-5 border-gray-800 border-opacity-25"></div> */}
      {/* <SharePanel /> */}
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <SkillsPanel
        items={[
          'Have a competitive Troubleshooting ability, obtain the Kepner Tregoe certification;',
          'Familiar with C/C++ language;',
          'Familiar with common commands of Linux operating system;',
          'Familiar with computer networks and common TCP/IP protocols;',
          'Familiar with Windows operating system, Microsoft AD and other related knowledge;',
          'Good English listening, speaking, reading and writing skills;',
          'Familiar with the use of database SQL, familiar with basic query command.',
        ]}
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <EduationPanel />
    </>
  );
}
