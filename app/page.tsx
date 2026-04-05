'use client';

import { useState, useEffect } from 'react';

export default function PYQWebsite() {
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [visitorCount, setVisitorCount] = useState(0);

  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  const branches = ['CSE', 'ME', 'ECE', 'CE', 'EE', 'IT'];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  // Real Visitor Counter (CountAPI)
  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/utkarsh-pyq-portal/visits')
      .then(res => res.json())
      .then(data => {
        setVisitorCount(data.value);
      })
      .catch(() => setVisitorCount(1247)); // backup number
  }, []);

  const handleOpenDrive = () => {
    if (!year || !branch || !semester) {
      alert("Please select Year, Branch and Semester");
      return;
    }

    const driveLink = "https://drive.google.com/drive/folders/1XRjFCThfoQ7FtkAb-qkzaBfoSrBLWjOx?usp=drive_link";
    window.open(driveLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold">College PYQ Portal</h1>
          <p className="mt-3 text-blue-100 text-xl">End Semester Question Papers</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-6 flex-1">
        <div className="bg-gray-900 rounded-3xl p-10">
          <h2 className="text-2xl font-semibold text-center mb-8">Select Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <label className="block text-sm mb-3">Year</label>
              <select value={year} onChange={(e) => setYear(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-lg">
                <option value="">Select Year</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-3">Branch</label>
              <select value={branch} onChange={(e) => setBranch(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-lg">
                <option value="">Select Branch</option>
                {branches.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-3">Semester</label>
              <select value={semester} onChange={(e) => setSemester(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-lg">
                <option value="">Select Semester</option>
                {semesters.map(s => <option key={s} value={s}>Semester {s}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleOpenDrive}
              className="bg-green-600 hover:bg-green-700 px-16 py-5 rounded-2xl text-2xl font-semibold transition-all active:scale-95"
            >
              Open Google Drive Folder
            </button>
          </div>
        </div>
      </div>

      {/* Footer with Real Visitor Count */}
      <footer className="bg-gray-900 border-t border-gray-800 py-10 mt-auto">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div>
              <h3 className="text-2xl font-bold text-blue-400">United College of Engineering and Research</h3>
              <p className="text-gray-400 mt-1">Prayagraj, Uttar Pradesh</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Developed By</h4>
              <p className="text-white">Utkarsh Singh</p>
              {/* <p className="text-gray-400 text-sm">Roll No: 2400100100526</p> */}
              <p className="text-gray-400 text-sm">Department of CSE</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-gray-400 text-sm">📧 US421514@gmail.com</p>
              {/* <p className="text-gray-400 text-sm">📱 6392860218</p> */}
              <a href="https://www.linkedin.com/in/utkarsh-singh-79b192243" target="_blank" className="text-blue-400 hover:text-blue-300 text-sm">
                🔗 LinkedIn
              </a>

              {/* Real Visitor Count */}
              <div className="mt-6 bg-gray-800 rounded-2xl p-4 text-center">
                <p className="text-xs text-gray-400">Total Students Visited</p>
                <p className="text-3xl font-bold text-green-400">{visitorCount.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-10 pt-6 border-t border-gray-800">
            © 2026 United College of Engineering and Research • All Rights Reserved
            <br />
            Made with ❤️ by Utkarsh Singh and Ayush Khare
          </div>
        </div>
      </footer>
    </div>
  );
}