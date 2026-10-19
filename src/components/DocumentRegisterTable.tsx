import React, { useState } from 'react';
import { MASTER_REGISTER_ITEMS } from '../data/documentRegister';
import { Language, RegisterItem } from '../types';
import { Table, Search, Download, CheckCircle, FileSpreadsheet } from 'lucide-react';

interface DocumentRegisterTableProps {
  language: Language;
}

export const DocumentRegisterTable: React.FC<DocumentRegisterTableProps> = ({ language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredItems = MASTER_REGISTER_ITEMS.filter((item) => {
    const matchesSearch =
      item.docId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.preparedBy.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleExportCSV = () => {
    const headers = [
      'Document ID',
      'Document Title',
      'Department',
      'Version',
      'Prepared By',
      'Reviewed By',
      'Approved By',
      'Status',
      'Review Cycle',
      'Effective Date',
      'Next Review Date'
    ];

    const rows = filteredItems.map((item) => [
      item.docId,
      `"${item.title.replace(/"/g, '""')}"`,
      `"${item.department}"`,
      item.version,
      `"${item.preparedBy}"`,
      `"${item.reviewedBy}"`,
      `"${item.approvedBy}"`,
      item.status,
      `"${item.reviewCycle}"`,
      item.effectiveDate,
      item.nextReviewDate
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'RajSecure_Master_Document_Register_DOC-REG-001.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="document-control" className="py-20 bg-[#0e1424] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>{language === 'en' ? 'Deliverable 15' : 'Deliverable 15'}</span>
            <span aria-hidden="true">·</span>
            <span>Master Document Control Register (DOC-REG-001)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'en'
              ? 'Central Document Control Register (Excel Repository)'
              : 'Master Document Control Register (Central Excel Sheet)'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'The single source of institutional truth tracking all 15 university deliverables: unique document IDs, version increments, preparation authors, executive approvals, review cycles, and audit statuses.'
              : 'Ek central Excel sheet jisme tamam documents ke naam, IDs, versions, approval status aur review dates record hongi. Yahan se live search karein aur CSV download karein.'}
          </p>
        </div>

        {/* Toolbar: Search + Filter + Export CSV button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={
                  language === 'en'
                    ? 'Search by Doc ID, title, or department...'
                    : 'Document ID ya title se dhoondein...'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-sky-500"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500 shrink-0"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Approved">Approved</option>
              <option value="Under Review">Under Review</option>
            </select>
          </div>

          <button
            onClick={handleExportCSV}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors shrink-0"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>{language === 'en' ? 'Download Excel / CSV (.csv)' : 'Excel (.csv) Download Karein'}</span>
          </button>
        </div>

        {/* Excel-style Data Table */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto max-h-[500px]">
            <table className="w-full text-left text-xs whitespace-nowrap">
              <thead className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-slate-400 font-mono">
                <tr>
                  <th className="p-3">Doc ID</th>
                  <th className="p-3">Document Title</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Ver</th>
                  <th className="p-3">Prepared By</th>
                  <th className="p-3">Reviewed By</th>
                  <th className="p-3">Approved By</th>
                  <th className="p-3">Review Cycle</th>
                  <th className="p-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {filteredItems.map((item) => (
                  <tr key={item.docId} className="hover:bg-slate-900/60 transition-colors">
                    <td className="p-3 font-mono font-bold text-sky-400">{item.docId}</td>
                    <td className="p-3 font-semibold text-white">{item.title}</td>
                    <td className="p-3 text-slate-400">{item.department}</td>
                    <td className="p-3 font-mono text-slate-300">{item.version}</td>
                    <td className="p-3 text-slate-300">{item.preparedBy}</td>
                    <td className="p-3 text-slate-400">{item.reviewedBy}</td>
                    <td className="p-3 text-emerald-400 font-medium">{item.approvedBy}</td>
                    <td className="p-3 text-amber-300/90 font-mono text-[11px]">{item.reviewCycle}</td>
                    <td className="p-3 text-right font-mono">
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded ${
                          item.status === 'Active'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredItems.length === 0 && (
                  <tr>
                    <td colSpan={9} className="p-8 text-center text-slate-500">
                      No documents found matching &quot;{searchQuery}&quot;
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer Summary */}
          <div className="p-3 bg-slate-900/80 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">{filteredItems.length} of {MASTER_REGISTER_ITEMS.length}</span>
              <span>Documents Displayed in Register</span>
            </div>
            <div className="font-mono text-[11px] text-slate-500">
              ISO 9001:2015 Clause 7.5 & ISO 27001 Document Control Standard
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
