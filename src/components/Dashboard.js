import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Dashboard() {
	const navigate = useNavigate()
	// axios.defaults.withCredentials = true;
	// useEffect(()=>{
	// 	axios.get('http://localhost:3000/dashboard')
	// 	.then(res => {
	// 		if(res.data.Status === "Success") {
	// 			if(res.data.email === "admin") {
	// 				navigate('/Dashboard');
	// 			}
	//             //  else {
	// 			// 	const id = res.data.id;
	// 			// 	navigate('/employeedetail/'+id)
	// 			// }
	// 		} else {
	// 			navigate('/start')
	// 		}
	// 	})
	// }, [])

	const handleLogout = () => {

		const Confirm = window.confirm("Are you sure you want to delete this student? ");
		if(Confirm === true)
		{

			axios.get('http://localhost:3000/logout')
				.then(res => {
					navigate('/')
				}).catch(err => console.log(err));
		}
	}
	return (
		<div className="container-fluid">
			<div className="row flex-nowrap">
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-success p-1">
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
						<a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
							<span className="fs-5 fw-bolder d-none d-sm-inline">Admin Dashboard</span>
						</a>
						<ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
							{/* <li>
								<Link to="" className="nav-link text-white px-0 align-middle">
									<i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
							</li> */}
							<li>
								<Link to="StudentDetails" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Manage Students</span> </Link>
							</li>
							{/* <li>
								<Link to="DashProfile" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Profile</span></Link>
							</li> */}
							<li>
								<Link to="AddStudent" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi bi-person-add"></i> <span className="ms-1 d-none d-sm-inline">Add Student</span></Link>
							</li>
							<li onClick={handleLogout}>
								<Link href="#" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span></Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="col p-0 m-0">
					<div className='p-2 d-flex justify-content-center border border-3 rounded-3 shadow-sm border-success'>
						<h4>Student Management System</h4>
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Dashboard;