import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./auth/SignIn"
import ForgotPwd from "./Auth/ForgotPwd";
import CheckEmail from "./Auth/CheckEmail";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminSummary from "./Pages/AdminSummary";
import TaskBoard from "./Pages/TaskBoard";
import LeaveBoard from "./Pages/LeaveBoard";
import PayRoll from "./Pages/PayRoll";
import Settings from "./Pages/Settings";
import Error from "./Pages/Error";
import Teams from "./Pages/SubPages/Teams";
import Employees from "./Pages/Employees";
import EmployeeDashboard from "./pages/employeeDashboard/EmployeeDashboard";
import EmployeeSummary from "./pages/employeeDashboard/EmployeeSummary";
import EmployeeLeaveboard from "./pages/employeeDashboard/EmployeeLeaveboard";
import EmployeeSettings from "./pages/employeeDashboard/EmployeeSettings";
import EmployeeNewtask from "./pages/employeeDashboard/EmployeeNewtask";
import EmployeeTaskBoard from "./pages/employeeDashboard/EmployeeTaskBoard";
import NewTeams from "./Pages/SubPages/NewTeams";
import Documents from "./Pages/SubPages/Documents";
import AccountAccess from "./Pages/SubPages/AccountAccess";
import PersonalInfo from "./Pages/PersonalInfo";
import Professional from "./Pages/SubPages/Professional";
import EditTeams from "./Pages/SubPages/EditTeams";
import NewTask from "./Pages/SubPages/NewTask";
import LeaveRequest from "./Pages/SubPages/LeaveRequest";
import AddPayroll from "./Pages/SubPages/AddPayroll";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/forgotpassword" element={<ForgotPwd />} />
          <Route path="/auth/checkemail/:resetToken" element={<CheckEmail />} />
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          >
            <Route path="" element={<AdminSummary />} />
            {/* Employess Sub Pages */}
            <Route path="/admin-dashboard/employess" element={<Employees />}>
              <Route
                path="/admin-dashboard/employess/teams"
                element={<Teams />}
              >
                <Route
                  path="/admin-dashboard/employess/teams/new-teams"
                  element={<NewTeams />}
                />
                <Route
                  path="/admin-dashboard/employess/teams/edit-teams"
                  element={<EditTeams />}
                />
              </Route>
            </Route>
            <Route
              path="/admin-dashboard/employess/personal-info"
              element={<PersonalInfo />}
            >
              <Route
                path="/admin-dashboard/employess/personal-info/professional"
                element={<Professional />}
              />
              <Route
                path="/admin-dashboard/employess/personal-info/documents"
                element={<Documents />}
              />
              <Route
                path="/admin-dashboard/employess/personal-info/account-access"
                element={<AccountAccess />}
              />
            </Route>
            {/* =================================================== */}
            <Route path="/admin-dashboard/taskboard" element={<TaskBoard />}>
              <Route
                path="/admin-dashboard/taskboard/new-task"
                element={<NewTask />}
              />
            </Route>
            <Route path="/admin-dashboard/leaveboard" element={<LeaveBoard />}>
              <Route
                path="/admin-dashboard/leaveboard/leave-request/:itemId"
                element={<LeaveRequest />}
              />
            </Route>
            <Route path="/admin-dashboard/payroll" element={<PayRoll />}>
              <Route
                path="/admin-dashboard/payroll/add-payroll"
                element={<AddPayroll />}
              />
            </Route>
            <Route path="/admin-dashboard/settings" element={<Settings />} />
          </Route>
          {/* Employee Dashboard Routes Section */}
          <Route path="/employee-dashboard" element={<EmployeeDashboard />}>
            <Route path="/employee-dashboard" element={<EmployeeSummary />} />
            <Route
              path="/employee-dashboard/leaveboard"
              element={<EmployeeLeaveboard />}
            />
            <Route
              path="/employee-dashboard/settings"
              element={<EmployeeSettings />}
            />
            <Route
              path="/employee-dashboard/taskboard"
              element={<EmployeeTaskBoard />}
            ></Route>
            <Route
              path="/employee-dashboard/taskboard/new-task"
              element={<EmployeeNewtask />}
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
