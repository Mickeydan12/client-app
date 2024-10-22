import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./auth/SignIn"
import Forgetpwd from "./auth/ForgotPwd"
import Checkemail from "./auth/CheckEmail"
import AdminDashboard from "./pages/AdminDashboard"
import AdminSummary from "./pages/AdminSummary"
import TaskBoard from "./pages/TaskBoard"
import LeaveBoard from "./pages/LeaveBoard"
import PayRoll from "./pages/PayRoll"
import Settings from "./pages/Settings"
import Error from "./pages/Error"
import Teams from "./pages/SubPages/Teams"
import Employees from "./pages/Employees"
import EmployeeDashboard from "./pages/employeeDashboard/EmployeeDashboard"
import EmployeeSummary from "./pages/employeeDashboard/EmployeeSummary"
import EmployeeLeaveboard from "./pages/employeeDashboard/EmployeeLeaveboard"
import EmployeeSettings from "./pages/employeeDashboard/EmployeeSettings"
import EmployeeNewtask from "./pages/employeeDashboard/EmployeeNewtask"
import EmployeeTaskBoard from "./pages/employeeDashboard/EmployeeTaskBoard"
import NewTeams from "./pages/SubPages/NewTeams"
import Documents from "./pages/SubPages/Documents"
import AccountAccess from "./pages/SubPages/AccountAccess"
import PersonalInfo from "./pages/PersonalInfo"
import Professional from "./pages/SubPages/Professional"
import EditTeams from "./pages/SubPages/EditTeams"
import NewTask from "./pages/SubPages/NewTask"
import LeaveRequest from "./pages/SubPages/LeaveRequest"
import AddPayroll from "./pages/SubPages/AddPayroll"
import PrivateRoute from "./utils/PrivateRoute"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/forgotpassword" element={<Forgetpwd />} />
          <Route path="/auth/checkemail/:resetToken" element={<Checkemail />} />
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
