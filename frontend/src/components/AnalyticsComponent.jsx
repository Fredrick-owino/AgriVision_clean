import React, { useState } from "react";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Download,
  Filter,
} from "lucide-react";

const AnalyticsComponent = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600">
              Comprehensive insights and data analysis for your agricultural
              operations
            </p>
          </div>
          <div className="flex gap-3">
            {/* Filter Button */}
            <div className="relative">
              <button
                className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setShowFilter((prev) => !prev)}
              >
                <Filter size={16} />
                Filter
              </button>
              {showFilter && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Filter Analytics</h4>
                  <div className="mb-3">
                    <label className="block text-sm text-gray-700 mb-1">Date Range</label>
                    <select className="w-full border border-gray-300 rounded px-2 py-1">
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                      <option>This year</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm text-gray-700 mb-1">Section</label>
                    <select className="w-full border border-gray-300 rounded px-2 py-1">
                      <option>All</option>
                      <option>Section A</option>
                      <option>Section B</option>
                      <option>Section C</option>
                    </select>
                  </div>
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-2"
                    onClick={() => setShowFilter(false)}
                  >
                    Apply Filter
                  </button>
                </div>
              )}
            </div>

            {/* Export Button */}
            <button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              onClick={() => {
                // Dummy CSV export data
                const csvContent = [
                  ["Section", "Trees", "Fruits"],
                  ["A", 45, 1247],
                  ["B", 38, 987],
                  ["C", 52, 1613],
                ]
                  .map((row) => row.join(","))
                  .join("\n");

                const blob = new Blob([csvContent], { type: "text/csv" });
                const url = URL.createObjectURL(blob);

                const a = document.createElement("a");
                a.href = url;
                a.download = "analytics_export.csv";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
            >
              <Download size={16} />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Yield</p>
              <p className="text-2xl font-bold text-green-600">2,847 kg</p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp size={12} />
                +12.5% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Disease Detection Rate
              </p>
              <p className="text-2xl font-bold text-orange-600">94.2%</p>
              <p className="text-xs text-orange-600 flex items-center gap-1">
                <TrendingUp size={12} />
                +2.1% accuracy improvement
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Activity className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Monitoring Hours</p>
              <p className="text-2xl font-bold text-blue-600">1,247</p>
              <p className="text-xs text-blue-600 flex items-center gap-1">
                <Calendar size={12} />
                This month
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Cost Savings</p>
              <p className="text-2xl font-bold text-purple-600">$15,420</p>
              <p className="text-xs text-purple-600 flex items-center gap-1">
                <TrendingUp size={12} />
                Through early detection
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Yield Trend Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Yield Trend Analysis
              </h3>
            </div>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last 3 months</option>
            </select>
          </div>

          <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-between p-4 space-x-2">
            {[20, 35, 45, 30, 55, 65, 70, 60, 75, 80, 85, 90].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-green-400 rounded-t transition-all hover:bg-green-500"
                  style={{ height: `${height}%` }}
                ></div>
              )
            )}
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Disease Detection Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <PieChart className="w-4 h-4 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Disease Distribution
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-center h-64">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400"></div>
              <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">87</div>
                  <div className="text-sm text-gray-500">Total Cases</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-sm text-gray-700">Leaf Blight</span>
              </div>
              <span className="text-sm font-medium text-gray-900">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-gray-700">Powdery Mildew</span>
              </div>
              <span className="text-sm font-medium text-gray-900">32%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-700">Root Rot</span>
              </div>
              <span className="text-sm font-medium text-gray-900">23%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Fruit Count Analytics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Fruit Count Analytics
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Section A</p>
                <p className="text-sm text-gray-500">Trees: 45</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-600">1,247</p>
                <p className="text-sm text-gray-500">fruits</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Section B</p>
                <p className="text-sm text-gray-500">Trees: 38</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-600">987</p>
                <p className="text-sm text-gray-500">fruits</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Section C</p>
                <p className="text-sm text-gray-500">Trees: 52</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-600">1,613</p>
                <p className="text-sm text-gray-500">fruits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Effectiveness */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Activity className="w-4 h-4 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Treatment Effectiveness
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-green-800">Copper Fungicide</h4>
                <span className="text-sm font-bold text-green-600">
                  92% Success
                </span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
              <p className="text-xs text-green-700 mt-1">
                Applied to 15 affected areas
              </p>
            </div>

            <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-blue-800">Organic Treatment</h4>
                <span className="text-sm font-bold text-blue-600">
                  78% Success
                </span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
              <p className="text-xs text-blue-700 mt-1">
                Applied to 8 affected areas
              </p>
            </div>

            <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-orange-800">
                  Preventive Spray
                </h4>
                <span className="text-sm font-bold text-orange-600">
                  85% Success
                </span>
              </div>
              <div className="w-full bg-orange-200 rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="text-xs text-orange-700 mt-1">
                Applied to 22 areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsComponent;
