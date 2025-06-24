
        // Sample Data
        const courses = [
            { id: 1, name: "DSRM", code: "CS101", description: "Data Structures and Algorithms" },
            { id: 2, name: "DBMS", code: "CS102", description: "Database Management Systems" },
            { id: 3, name: "CN", code: "CS103", description: "Computer Networks" },
            { id: 4, name: "TOC", code: "CS104", description: "Theory of Computation" },
            { id: 5, name: "OOPS", code: "CS105", description: "Object Oriented Programming" },
            { id: 6, name: "DATA STRUCTURES", code: "CS106", description: "Advanced Data Structures" },
            { id: 7, name: "C PROGRAMMING", code: "CS107", description: "C Programming Language" },
            { id: 8, name: "FULL STACK DEVELOPMENT", code: "CS108", description: "Full Stack Web Development" }
        ];

        let students = [
            { id: 1, rollNo: "CS101", admissionNo: "ADM001", firstName: "Soham", lastName: "Shrawankar", class: "B.Tech", section: "CSE-A", email: "sohamshrawankar@example.com", phone: "1234567890", status: "active", profileImg: "https://randomuser.me/api/portraits/men/1.jpg", attendance: { present: 18, absent: 2 } },
            { id: 2, rollNo: "CS102", admissionNo: "ADM002", firstName: "Advait", lastName: "Kulkarni", class: "B.Tech", section: "CSE-A", email: "advaitkulkarni@example.com", phone: "9876543210", status: "active", profileImg: "https://randomuser.me/api/portraits/women/2.jpg", attendance: { present: 19, absent: 1 } },
            { id: 3, rollNo: "CS103", admissionNo: "ADM003", firstName: "Aryan", lastName: "Tamhane", class: "B.Tech", section: "CSE-A", email: "aryantamhane@example.com", phone: "4561237890", status: "active", profileImg: "https://randomuser.me/api/portraits/men/3.jpg", attendance: { present: 15, absent: 5 } },
            { id: 4, rollNo: "CS104", admissionNo: "ADM004", firstName: "Siddhant", lastName: "Rajurkar", class: "B.Tech", section: "CSE-A", email: "siddhantrajurkar@example.com", phone: "7894561230", status: "noc", profileImg: "https://randomuser.me/api/portraits/women/4.jpg", attendance: { present: 10, absent: 10 } },
            { id: 5, rollNo: "CS105", admissionNo: "ADM005", firstName: "Aryawardhan", lastName: "Deshmukh", class: "B.Tech", section: "CSE-A", email: "aryawardhandeshmukh@example.com", phone: "3216549870", status: "active", profileImg: "https://randomuser.me/api/portraits/men/5.jpg", attendance: { present: 20, absent: 0 } }
        ];

        let attendanceRecords = [
            { id: 1, date: "2023-10-15", course: "DBMS", present: 4, absent: 1, status: "completed" },
            { id: 2, date: "2023-10-14", course: "DSRM", present: 3, absent: 2, status: "completed" },
            { id: 3, date: "2023-10-12", course: "CN", present: 5, absent: 0, status: "completed" },
            { id: 4, date: "2023-10-10", course: "TOC", present: 4, absent: 1, status: "completed" }
        ];

        // DOM Elements
        const loginPage = document.getElementById('login-page');
        const teacherDashboard = document.getElementById('teacher-dashboard');
        const studentAttendance = document.getElementById('student-attendance');
        const loginEmail = document.getElementById('login-email');
        const loginPassword = document.getElementById('login-password');
        const loginButton = document.getElementById('login-button');
        const loginError = document.getElementById('login-error');
        const toggleMode = document.getElementById('toggle-mode');
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const sidebar = document.getElementById('sidebar');
        const usernameDisplay = document.getElementById('username-display');
        const pageTitle = document.getElementById('page-title');

        // Content Sections
        const dashboardContent = document.getElementById('dashboard-content');
        const studentsContent = document.getElementById('students-content');
        const coursesContent = document.getElementById('courses-content');
        const attendanceContent = document.getElementById('attendance-content');
        const reportsContent = document.getElementById('reports-content');
        const settingsContent = document.getElementById('settings-content');

        // Navigation Links
        const dashboardLink = document.getElementById('dashboard-link');
        const studentsLink = document.getElementById('students-link');
        const coursesLink = document.getElementById('courses-link');
        const attendanceLink = document.getElementById('attendance-link');
        const reportsLink = document.getElementById('reports-link');
        const settingsLink = document.getElementById('settings-link');
        const logoutLink = document.getElementById('logout-link');

        // Dashboard Elements
        const totalStudents = document.getElementById('total-students');
        const presentToday = document.getElementById('present-today');
        const absentToday = document.getElementById('absent-today');
        const avgAttendance = document.getElementById('avg-attendance');
        const recentAttendanceTable = document.getElementById('recent-attendance-table');
        const viewAllAttendance = document.getElementById('view-all-attendance');
        const attendanceHeatmap = document.getElementById('attendance-heatmap');

        // Students Elements
        const studentsTable = document.getElementById('students-table');
        const addStudentBtn = document.getElementById('add-student-btn');
        const addStudentModal = document.getElementById('add-student-modal');
        const closeAddStudentModal = document.getElementById('close-add-student-modal');
        const cancelAddStudent = document.getElementById('cancel-add-student');
        const saveStudent = document.getElementById('save-student');
        const addStudentForm = document.getElementById('add-student-form');
        const studentImgPreview = document.getElementById('student-img-preview');
        const uploadImgBtn = document.getElementById('upload-img-btn');
        const studentImgUpload = document.getElementById('student-img-upload');

        // Courses Elements
        const coursesGrid = document.querySelector('.courses-grid');

        // Attendance Elements
        const attendanceCourse = document.getElementById('attendance-course');
        const generateQrBtn = document.getElementById('generate-qr-btn');
        const qrSection = document.getElementById('qr-section');
        const qrCode = document.getElementById('qr-code');
        const qrTimer = document.getElementById('qr-timer');
        const attendanceDate = document.getElementById('attendance-date');
        const attendanceLecture = document.getElementById('attendance-lecture');
        const attendanceRemarks = document.getElementById('attendance-remarks');
        const totalCount = document.getElementById('total-count');
        const presentCount = document.getElementById('present-count');
        const absentCount = document.getElementById('absent-count');
        const attendanceTable = document.getElementById('attendance-table');
        const submitAttendance = document.getElementById('submit-attendance');

        // Reports Elements
        const reportCourse = document.getElementById('report-course');
        const reportMonth = document.getElementById('report-month');
        const reportTotal = document.getElementById('report-total');
        const reportPresent = document.getElementById('report-present');
        const reportAbsent = document.getElementById('report-absent');
        const reportPercentage = document.getElementById('report-percentage');
        const reportsTable = document.getElementById('reports-table');
        const subjectPerformanceCharts = document.getElementById('subject-performance-charts');

        // Settings Elements
        const editProfileBtn = document.getElementById('edit-profile-btn');
        const editProfileModal = document.getElementById('edit-profile-modal');
        const closeEditProfileModal = document.getElementById('close-edit-profile-modal');
        const cancelEditProfile = document.getElementById('cancel-edit-profile');
        const saveProfile = document.getElementById('save-profile');
        const profileImgPreview = document.getElementById('profile-img-preview');
        const uploadProfileImgBtn = document.getElementById('upload-profile-img-btn');
        const profileImgUpload = document.getElementById('profile-img-upload');
        const qrDuration = document.getElementById('qr-duration');
        const exportCsvBtn = document.getElementById('export-csv-btn');
        const exportExcelBtn = document.getElementById('export-excel-btn');
        const importDataBtn = document.getElementById('import-data-btn');

        // Student Attendance Elements
        const studentName = document.getElementById('student-name');
        const studentDetails = document.getElementById('student-details');
        const qrScannerSection = document.getElementById('qr-scanner-section');
        const attendanceSuccess = document.getElementById('attendance-success');
        const attendanceDetails = document.getElementById('attendance-details');
        const scanAgainBtn = document.getElementById('scan-again-btn');

        // Toast Notification
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');

        // Global Variables
        let currentUser = null;
        let qrInterval = null;
        let currentQRCode = null;
        let isMobile = false;
        let darkMode = localStorage.getItem('darkMode') === 'true';

        // Initialize App
        function initApp() {
            checkMobile();
            setupEventListeners();
            applyDarkMode();
            setCurrentDate();
            populateCoursesDropdown();
            populateReportCourses();
            populateMonths();
        }

        // Check if device is mobile
        function checkMobile() {
            isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        // Set up event listeners
        function setupEventListeners() {
            // Login
            loginButton.addEventListener('click', handleLogin);
            
            // Toggle Dark Mode
            toggleMode.addEventListener('click', toggleDarkMode);
            darkModeToggle.addEventListener('change', toggleDarkMode);
            
            // Mobile Menu Toggle
            mobileMenuToggle.addEventListener('click', toggleMobileMenu);
            
            // Navigation Links
            dashboardLink.addEventListener('click', () => showSection('dashboard'));
            studentsLink.addEventListener('click', () => showSection('students'));
            coursesLink.addEventListener('click', () => showSection('courses'));
            attendanceLink.addEventListener('click', () => showSection('attendance'));
            reportsLink.addEventListener('click', () => showSection('reports'));
            settingsLink.addEventListener('click', () => showSection('settings'));
            logoutLink.addEventListener('click', handleLogout);
            
            // Students
            addStudentBtn.addEventListener('click', () => addStudentModal.style.display = 'flex');
            closeAddStudentModal.addEventListener('click', () => addStudentModal.style.display = 'none');
            cancelAddStudent.addEventListener('click', () => addStudentModal.style.display = 'none');
            saveStudent.addEventListener('click', saveStudentHandler);
            uploadImgBtn.addEventListener('click', () => studentImgUpload.click());
            studentImgUpload.addEventListener('change', handleStudentImageUpload);
            
            // Attendance
            generateQrBtn.addEventListener('click', generateQRCode);
            submitAttendance.addEventListener('click', submitAttendanceHandler);
            
            // Reports
            reportCourse.addEventListener('change', updateReports);
            reportMonth.addEventListener('change', updateReports);
            
            // Settings
            editProfileBtn.addEventListener('click', () => editProfileModal.style.display = 'flex');
            closeEditProfileModal.addEventListener('click', () => editProfileModal.style.display = 'none');
            cancelEditProfile.addEventListener('click', () => editProfileModal.style.display = 'none');
            saveProfile.addEventListener('click', saveProfileHandler);
            uploadProfileImgBtn.addEventListener('click', () => profileImgUpload.click());
            profileImgUpload.addEventListener('change', handleProfileImageUpload);
            exportCsvBtn.addEventListener('click', exportToCsv);
            exportExcelBtn.addEventListener('click', exportToExcel);
            importDataBtn.addEventListener('click', importData);
            
            // Student Attendance
            scanAgainBtn.addEventListener('click', () => {
                attendanceSuccess.style.display = 'none';
                qrScannerSection.style.display = 'block';
            });
            
            // Close modals when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === addStudentModal) addStudentModal.style.display = 'none';
                if (e.target === editProfileModal) editProfileModal.style.display = 'none';
            });
        }

        // Handle Login
        function handleLogin() {
            const email = loginEmail.value.trim();
            const password = loginPassword.value.trim();
            
            // Simple validation
            if (!email || !password) {
                showError('Please enter both email and password');
                return;
            }
            
            // Check if teacher login
            if (email.endsWith('_teacher@gmail.com')) {
                if (isMobile) {
                    showError('Teacher login is only allowed on laptops/desktops');
                    return;
                }
                
                if (email === 'abc_teacher@gmail.com' && password === 'teacher123') {
                    currentUser = {
                        email: email,
                        name: 'John Doe',
                        role: 'teacher',
                        profileImg: 'https://randomuser.me/api/portraits/men/32.jpg'
                    };
                    loginSuccess();
                } else {
                    showError('Invalid teacher credentials');
                }
            } 
            // Check if student login
            else if (email.endsWith('_student@gmail.com')) {
                if (!isMobile) {
                    showError('Student login is only allowed on mobile devices');
                    return;
                }
                
                if (email === 'xyz_student@gmail.com' && password === 'student123') {
                    const student = students.find(s => s.email === email) || students[1]; // Default to Jane Smith if not found
                    
                    currentUser = {
                        email: email,
                        name: `${student.firstName} ${student.lastName}`,
                        role: 'student',
                        profileImg: student.profileImg,
                        studentId: student.id
                    };
                    loginSuccess();
                } else {
                    showError('Invalid student credentials');
                }
            } else {
                showError('Invalid email format. Use _teacher@gmail.com or _student@gmail.com');
            }
        }

        // Show error message
        function showError(message) {
            loginError.textContent = message;
            loginError.style.display = 'block';
            
            setTimeout(() => {
                loginError.style.display = 'none';
            }, 3000);
        }

        // Handle successful login
        function loginSuccess() {
            loginPage.style.display = 'none';
            
            if (currentUser.role === 'teacher') {
                teacherDashboard.style.display = 'flex';
                usernameDisplay.textContent = currentUser.name;
                updateDashboard();
                showSection('students'); // Open students section after login as requested
            } else {
                studentAttendance.style.display = 'flex';
                studentName.textContent = currentUser.name;
                studentDetails.textContent = `Roll No: ${students.find(s => s.id === currentUser.studentId)?.rollNo || 'N/A'} | Class: B.Tech CSE`;
            }
            
            showToast("Welcome, Teacher!");
        }

        // Handle Logout
        function handleLogout() {
            currentUser = null;
            teacherDashboard.style.display = 'none';
            studentAttendance.style.display = 'none';
            loginPage.style.display = 'flex';
            loginEmail.value = '';
            loginPassword.value = '';
            
            // Stop QR timer if running
            if (qrInterval) {
                clearInterval(qrInterval);
                qrInterval = null;
            }
        }

        // Toggle Dark Mode
        function toggleDarkMode() {
            darkMode = !darkMode;
            localStorage.setItem('darkMode', darkMode);
            applyDarkMode();
        }

        // Apply Dark Mode
        function applyDarkMode() {
            if (darkMode) {
                document.body.classList.add('dark-mode');
                darkModeToggle.checked = true;
                toggleMode.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                document.body.classList.remove('dark-mode');
                darkModeToggle.checked = false;
                toggleMode.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }

        // Toggle Mobile Menu
        function toggleMobileMenu() {
            sidebar.classList.toggle('active');
        }

        // Show Section
        function showSection(section) {
            // Hide all sections
            dashboardContent.style.display = 'none';
            studentsContent.style.display = 'none';
            coursesContent.style.display = 'none';
            attendanceContent.style.display = 'none';
            reportsContent.style.display = 'none';
            settingsContent.style.display = 'none';
            
            // Remove active class from all links
            dashboardLink.classList.remove('active');
            studentsLink.classList.remove('active');
            coursesLink.classList.remove('active');
            attendanceLink.classList.remove('active');
            reportsLink.classList.remove('active');
            settingsLink.classList.remove('active');
            
            // Show selected section and set active link
            switch (section) {
                case 'dashboard':
                    dashboardContent.style.display = 'block';
                    dashboardLink.classList.add('active');
                    pageTitle.textContent = 'Dashboard';
                    updateDashboard();
                    break;
                case 'students':
                    studentsContent.style.display = 'block';
                    studentsLink.classList.add('active');
                    pageTitle.textContent = 'Students';
                    updateStudentsTable();
                    break;
                case 'courses':
                    coursesContent.style.display = 'block';
                    coursesLink.classList.add('active');
                    pageTitle.textContent = 'Courses';
                    updateCoursesGrid();
                    break;
                case 'attendance':
                    attendanceContent.style.display = 'block';
                    attendanceLink.classList.add('active');
                    pageTitle.textContent = 'Attendance';
                    updateAttendanceTable();
                    break;
                case 'reports':
                    reportsContent.style.display = 'block';
                    reportsLink.classList.add('active');
                    pageTitle.textContent = 'Reports';
                    updateReports();
                    break;
                case 'settings':
                    settingsContent.style.display = 'block';
                    settingsLink.classList.add('active');
                    pageTitle.textContent = 'Settings';
                    break;
            }
        }

        // Update Dashboard
        function updateDashboard() {
            // Update stats
            totalStudents.textContent = students.length;
            
            // Calculate present and absent for today
            const today = new Date().toISOString().split('T')[0];
            const todayRecord = attendanceRecords.find(record => record.date === today);
            
            if (todayRecord) {
                presentToday.textContent = todayRecord.present;
                absentToday.textContent = todayRecord.absent;
            } else {
                presentToday.textContent = '0';
                absentToday.textContent = '0';
            }
            
            // Calculate average attendance
            const totalPresent = students.reduce((sum, student) => sum + student.attendance.present, 0);
            const totalAbsent = students.reduce((sum, student) => sum + student.attendance.absent, 0);
            const avg = totalPresent / (totalPresent + totalAbsent) * 100;
            avgAttendance.textContent = `${avg.toFixed(1)}%`;
            
            // Update recent attendance table
            recentAttendanceTable.innerHTML = '';
            const recentRecords = attendanceRecords.slice(0, 4);
            
            recentRecords.forEach(record => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${formatDate(record.date)}</td>
                    <td>${record.course}</td>
                    <td>${record.present}</td>
                    <td>${record.absent}</td>
                    <td><span class="status-badge ${record.status === 'completed' ? 'badge-success' : 'badge-warning'}">${record.status}</span></td>
                `;
                recentAttendanceTable.appendChild(row);
            });
            
            // Update attendance heatmap (unique feature)
            updateAttendanceHeatmap();
        }

        // Update Attendance Heatmap
        function updateAttendanceHeatmap() {
            attendanceHeatmap.innerHTML = '';
            
            // Group attendance by course
            const courseAttendance = {};
            attendanceRecords.forEach(record => {
                if (!courseAttendance[record.course]) {
                    courseAttendance[record.course] = {
                        present: 0,
                        total: 0
                    };
                }
                courseAttendance[record.course].present += record.present;
                courseAttendance[record.course].total += record.present + record.absent;
            });
            
            // Create heatmap cards
            for (const course in courseAttendance) {
                const percentage = (courseAttendance[course].present / courseAttendance[course].total) * 100;
                
                const card = document.createElement('div');
                card.className = 'heatmap-card';
                card.innerHTML = `
                    <div class="heatmap-card-header">
                        <div class="heatmap-card-title">${course}</div>
                        <div class="heatmap-card-value">${percentage.toFixed(1)}%</div>
                    </div>
                    <div class="heatmap-bar">
                        <div class="heatmap-fill" style="width: ${percentage}%"></div>
                    </div>
                `;
                attendanceHeatmap.appendChild(card);
            }
        }

        // Update Students Table
        function updateStudentsTable() {
            studentsTable.innerHTML = '';
            
            students.forEach((student, index) => {
                const row = document.createElement('tr');
                if (student.status === 'noc') {
                    row.classList.add('noc-highlight');
                }
                
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${student.rollNo}</td>
                    <td>${student.firstName} ${student.lastName}</td>
                    <td><img src="${student.profileImg}" alt="Profile" class="profile-img"></td>
                    <td>${student.class}/${student.section}</td>
                    <td>${student.admissionNo}</td>
                    <td><span class="status-badge ${student.status === 'active' ? 'badge-success' : student.status === 'inactive' ? 'badge-danger' : 'badge-warning'}">${student.status}</span></td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm">Edit</button>
                        <button class="btn btn-outline-danger btn-sm">Delete</button>
                    </td>
                `;
                studentsTable.appendChild(row);
            });
        }

        // Update Courses Grid
        function updateCoursesGrid() {
            coursesGrid.innerHTML = '';
            
            courses.forEach(course => {
                const card = document.createElement('div');
                card.className = 'course-card';
                card.innerHTML = `
                    <div class="course-header">
                        <h4>${course.name}</h4>
                    </div>
                    <div class="course-body">
                        <p><strong>Code:</strong> ${course.code}</p>
                        <p>${course.description}</p>
                    </div>
                    <div class="course-footer">
                        <button class="btn btn-primary btn-block attendance-btn" data-course="${course.name}">Attendance</button>
                    </div>
                `;
                coursesGrid.appendChild(card);
            });
            
            // Add event listeners to attendance buttons
            document.querySelectorAll('.attendance-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const course = this.getAttribute('data-course');
                    showSection('attendance');
                    attendanceCourse.value = course;
                    updateAttendanceTable();
                });
            });
        }

        // Populate Courses Dropdown
        function populateCoursesDropdown() {
            attendanceCourse.innerHTML = '<option value="">Select Course</option>';
            courses.forEach(course => {
                const option = document.createElement('option');
                option.value = course.name;
                option.textContent = course.name;
                attendanceCourse.appendChild(option);
            });
        }

        // Populate Report Courses
        function populateReportCourses() {
            reportCourse.innerHTML = '<option value="">All Courses</option>';
            courses.forEach(course => {
                const option = document.createElement('option');
                option.value = course.name;
                option.textContent = course.name;
                reportCourse.appendChild(option);
            });
        }

        // Populate Months
        function populateMonths() {
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            
            reportMonth.innerHTML = '<option value="">All Months</option>';
            months.forEach((month, index) => {
                const option = document.createElement('option');
                option.value = index + 1;
                option.textContent = month;
                reportMonth.appendChild(option);
            });
        }

        // Update Attendance Table
        function updateAttendanceTable() {
            const course = attendanceCourse.value;
            attendanceTable.innerHTML = '';
            
            let filteredStudents = [...students];
            if (course) {
                // In a real app, we would filter students enrolled in this course
                // For demo, we'll just use all students
            }
            
            // Update counts
            totalCount.textContent = filteredStudents.length;
            presentCount.textContent = '0';
            absentCount.textContent = filteredStudents.length;
            
            filteredStudents.forEach((student, index) => {
                const row = document.createElement('tr');
                if (student.status === 'noc') {
                    row.classList.add('noc-highlight');
                }
                
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${student.rollNo}</td>
                    <td>${student.firstName} ${student.lastName}</td>
                    <td><img src="${student.profileImg}" alt="Profile" class="profile-img"></td>
                    <td>
                        <label class="custom-checkbox">
                            <input type="checkbox" class="attendance-checkbox" data-student-id="${student.id}">
                            <span class="checkmark"></span>
                            Present
                        </label>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm view-profile-btn">Profile</button>
                    </td>
                `;
                attendanceTable.appendChild(row);
            });
            
            // Add event listeners to checkboxes
            document.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
                checkbox.addEventListener('change', updateAttendanceCounts);
            });
        }

        // Update Attendance Counts
        function updateAttendanceCounts() {
            const checkboxes = document.querySelectorAll('.attendance-checkbox');
            let present = 0;
            
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    present++;
                }
            });
            
            presentCount.textContent = present;
            absentCount.textContent = checkboxes.length - present;
        }

        // Generate QR Code
        function generateQRCode() {
    const course = attendanceCourse.value;
    
    if (!course) {
        showToast('Please select a course first', 'error');
        return;
    }
    
    // Generate new QR code
    refreshQRCode();
    
    // Show QR code section if hidden
    qrSection.style.display = 'block';
    
    showToast('QR Code generated successfully!');
}

function refreshQRCode() {
    const course = attendanceCourse.value;
    
    // Clear previous QR code if exists
    while (qrCode.firstChild) {
        qrCode.removeChild(qrCode.firstChild);
    }
    
    // Generate a new random token for the QR code
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    currentQRCode = { 
        token, 
        course, 
        date: new Date().toISOString(),
        expires: new Date(Date.now() + (qrDuration.value * 1000)).toISOString()
    };
    
    // Create canvas element for QR code
    const canvas = document.createElement('canvas');
    qrCode.appendChild(canvas);
    
    // Generate QR code
    QRCode.toCanvas(canvas, JSON.stringify(currentQRCode), { 
        width: 180,
        margin: 1,
        color: {
            dark: '#2a3f5f',
            light: '#ffffff'
        }
    }, (error) => {
        if (error) {
            console.error('QR Code generation error:', error);
            showToast('Failed to generate QR code', 'error');
            return;
        }
        
        // Start timer for this QR code
        startQRTimer();
    });
}

function startQRTimer() {
    let seconds = parseInt(qrDuration.value);
    qrTimer.textContent = seconds;
    
    // Clear any existing timer
    if (qrInterval) {
        clearInterval(qrInterval);
    }
    
    qrInterval = setInterval(() => {
        seconds--;
        qrTimer.textContent = seconds;
        
        // Visual warning when about to expire
        if (seconds <= 3) {
            qrTimer.style.color = '#e74a3b';
            qrTimer.style.fontWeight = 'bold';
        }
        
        if (seconds <= 0) {
            clearInterval(qrInterval);
            qrTimer.style.color = '';
            qrTimer.style.fontWeight = '';
            showToast('QR Code expired. Generating new one...');
            
            // Instead of hiding, generate a new QR code
            refreshQRCode();
        }
    }, 1000);
}

function startQRTimer() {
    let seconds = parseInt(qrDuration.value);
    qrTimer.textContent = seconds;
    
    // Clear any existing timer
    if (qrInterval) {
        clearInterval(qrInterval);
    }
    
    qrInterval = setInterval(() => {
        seconds--;
        qrTimer.textContent = seconds;
        
        // Visual warning when about to expire
        if (seconds <= 3) {
            qrTimer.style.color = '#e74a3b';
            qrTimer.style.fontWeight = 'bold';
        }
        
        if (seconds <= 0) {
            clearInterval(qrInterval);
            qrSection.style.display = 'none';
            currentQRCode = null;
            qrTimer.style.color = '';
            qrTimer.style.fontWeight = '';
            showToast('QR Code has expired. Generate a new one if needed.');
        }
    }, 1000);
}

        // Submit Attendance
        function submitAttendanceHandler() {
            const course = attendanceCourse.value;
            const date = attendanceDate.value;
            const lecture = attendanceLecture.value;
            const remarks = attendanceRemarks.value;
            
            if (!course || !date) {
                showToast('Please fill all required fields', 'error');
                return;
            }
            
            // Get present students
            const presentStudentIds = [];
            document.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
                if (checkbox.checked) {
                    presentStudentIds.push(parseInt(checkbox.getAttribute('data-student-id')));
                }
            });
            
            // Create new attendance record
            const newRecord = {
                id: attendanceRecords.length + 1,
                date,
                course,
                present: presentStudentIds.length,
                absent: students.length - presentStudentIds.length,
                status: 'completed',
                lecture,
                remarks
            };
            
            attendanceRecords.push(newRecord);
            
            // Update student attendance counts
            students.forEach(student => {
                if (presentStudentIds.includes(student.id)) {
                    student.attendance.present++;
                } else {
                    student.attendance.absent++;
                }
            });
            
            showToast('Attendance submitted successfully!');
            
            // Reset form
            attendanceRemarks.value = '';
            document.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
                checkbox.checked = false;
            });
            
            updateAttendanceCounts();
            updateDashboard();
        }

        // Update Reports
        function updateReports() {
            const course = reportCourse.value;
            const month = reportMonth.value;
            
            // Filter records
            let filteredRecords = [...attendanceRecords];
            
            if (course) {
                filteredRecords = filteredRecords.filter(record => record.course === course);
            }
            
            if (month) {
                filteredRecords = filteredRecords.filter(record => {
                    const recordMonth = new Date(record.date).getMonth() + 1;
                    return recordMonth === parseInt(month);
                });
            }
            
            // Calculate totals
            const totalClasses = filteredRecords.length;
            const totalPresent = filteredRecords.reduce((sum, record) => sum + record.present, 0);
            const totalAbsent = filteredRecords.reduce((sum, record) => sum + record.absent, 0);
            const percentage = totalPresent / (totalPresent + totalAbsent) * 100 || 0;
            
            // Update summary
            reportTotal.textContent = totalClasses;
            reportPresent.textContent = totalPresent;
            reportAbsent.textContent = totalAbsent;
            reportPercentage.textContent = `${percentage.toFixed(1)}%`;
            
            // Update reports table
            reportsTable.innerHTML = '';
            
            students.forEach((student, index) => {
                // Calculate student's attendance for filtered records
                // In a real app, we would have more detailed attendance data per student
                const studentPresent = Math.floor(student.attendance.present * (filteredRecords.length / attendanceRecords.length));
                const studentAbsent = Math.floor(student.attendance.absent * (filteredRecords.length / attendanceRecords.length));
                const studentPercentage = studentPresent / (studentPresent + studentAbsent) * 100 || 0;
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${student.rollNo}</td>
                    <td>${student.firstName} ${student.lastName}</td>
                    <td>${studentPresent + studentAbsent}</td>
                    <td>${studentPresent}</td>
                    <td>${studentAbsent}</td>
                    <td>${studentPercentage.toFixed(1)}%</td>
                    <td>
                        <span class="status-badge ${studentPercentage >= 75 ? 'badge-success' : studentPercentage >= 50 ? 'badge-warning' : 'badge-danger'}">
                            ${studentPercentage >= 75 ? 'Good' : studentPercentage >= 50 ? 'Average' : 'Poor'}
                        </span>
                    </td>
                `;
                reportsTable.appendChild(row);
            });
            
            // Update subject performance charts
            updateSubjectPerformanceCharts();
        }

        // Update Subject Performance Charts
        function updateSubjectPerformanceCharts() {
            subjectPerformanceCharts.innerHTML = '';
            
            // Group attendance by course
            const coursePerformance = {};
            attendanceRecords.forEach(record => {
                if (!coursePerformance[record.course]) {
                    coursePerformance[record.course] = {
                        present: 0,
                        total: 0
                    };
                }
                coursePerformance[record.course].present += record.present;
                coursePerformance[record.course].total += record.present + record.absent;
            });
            
            // Create performance bars
            for (const course in coursePerformance) {
                const percentage = (coursePerformance[course].present / coursePerformance[course].total) * 100;
                
                const container = document.createElement('div');
                container.className = 'progress-container';
                container.innerHTML = `
                    <div class="progress-label">
                        <span>${course}</span>
                        <span>${percentage.toFixed(1)}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percentage}%"></div>
                    </div>
                `;
                subjectPerformanceCharts.appendChild(container);
            }
        }

        // Save Student Handler
        function saveStudentHandler() {
            const rollNo = document.getElementById('student-rollno').value;
            const admissionNo = document.getElementById('student-admissionno').value;
            const firstName = document.getElementById('student-firstname').value;
            const lastName = document.getElementById('student-lastname').value;
            const studentClass = document.getElementById('student-class').value;
            const section = document.getElementById('student-section').value;
            const email = document.getElementById('student-email').value;
            const phone = document.getElementById('student-phone').value;
            const status = document.getElementById('student-status').value;
            const profileImg = studentImgPreview.src;
            
            // Create new student
            const newStudent = {
                id: students.length + 1,
                rollNo,
                admissionNo,
                firstName,
                lastName,
                class: studentClass,
                section,
                email,
                phone,
                status,
                profileImg,
                attendance: { present: 0, absent: 0 }
            };
            
            students.push(newStudent);
            
            // Close modal and reset form
            addStudentModal.style.display = 'none';
            addStudentForm.reset();
            studentImgPreview.src = 'https://via.placeholder.com/120';
            
            // Update students table
            updateStudentsTable();
            showToast('Student added successfully!');
        }

        // Handle Student Image Upload
        function handleStudentImageUpload(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    studentImgPreview.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        }

        // Handle Profile Image Upload
        function handleProfileImageUpload(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    profileImgPreview.src = event.target.result;
                    if (currentUser) {
                        currentUser.profileImg = event.target.result;
                        document.querySelector('.user-profile img').src = event.target.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        }

        // Save Profile Handler
        function saveProfileHandler() {
            const firstName = document.getElementById('profile-firstname').value;
            const lastName = document.getElementById('profile-lastname').value;
            const email = document.getElementById('profile-email').value;
            const phone = document.getElementById('profile-phone').value;
            const department = document.getElementById('profile-department').value;
            
            // Update current user
            if (currentUser) {
                currentUser.name = `${firstName} ${lastName}`;
                currentUser.email = email;
                
                // Update UI
                usernameDisplay.textContent = currentUser.name;
                document.querySelector('.user-profile span').textContent = currentUser.name;
            }
            
            // Close modal
            editProfileModal.style.display = 'none';
            showToast('Profile updated successfully!');
        }

        // Export to CSV
        function exportToCsv() {
            let csv = 'Roll No,Name,Class,Present,Absent,Percentage\n';
            
            students.forEach(student => {
                const total = student.attendance.present + student.attendance.absent;
                const percentage = (student.attendance.present / total) * 100 || 0;
                
                csv += `${student.rollNo},${student.firstName} ${student.lastName},${student.class}/${student.section},${student.attendance.present},${student.attendance.absent},${percentage.toFixed(2)}%\n`;
            });
            
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden', '');
            a.setAttribute('href', url);
            a.setAttribute('download', 'attendance_report.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            showToast('Data exported to CSV successfully!');
        }

        // Export to Excel
        function exportToExcel() {
            // In a real app, we would use a library like SheetJS
            showToast('Excel export would be implemented with a library like SheetJS', 'info');
        }

        // Import Data
        function importData() {
            // In a real app, we would implement file import functionality
            showToast('Data import functionality would be implemented here', 'info');
        }

        // Show Toast Notification
        function showToast(message, type = 'success') {
            toastMessage.textContent = message;
            toast.className = 'toast';
            
            if (type === 'error') {
                toast.classList.add('error');
            }
            
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Format Date
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        }

        // Set Current Date
        function setCurrentDate() {
            const today = new Date().toISOString().split('T')[0];
            attendanceDate.value = today;
        }

        // Initialize the app
        window.onload = initApp;
        async function handleQRCode(code) {
            try {
                const response = await fetch('https://your-api.com/mark-attendance', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        qrCode: code,
                        studentId: currentUser.studentId
                    })
                });
                
                const result = await response.json();
                if (result.success) {
                    showStatus(`Attendance marked for ${result.course}`, 'success');
                } else {
                    showStatus(result.message || 'Attendance marking failed', 'error');
                }
            } catch (error) {
                showStatus('Network error. Please try again.', 'error');
            }
        }
        // Add this to your mobile student interface code

// Camera access function
function startCamera() {
    // Check if browser supports mediaDevices API
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showToast('Camera API not supported in this browser', 'error');
        return;
    }

    // Request camera permissions
    navigator.mediaDevices.getUserMedia({ 
        video: { 
            facingMode: 'environment', // Use rear camera
            width: { ideal: 1280 },
            height: { ideal: 720 }
        },
        audio: false 
    })
    .then(function(stream) {
        // Get video element
        const video = document.getElementById('scanner');
        
        // Set the stream as video source
        video.srcObject = stream;
        
        // Play the video
        video.play()
            .then(() => {
                // Start scanning for QR codes
                scanQRCode(video);
            })
            .catch(err => {
                showToast('Could not start camera: ' + err.message, 'error');
            });
    })
    .catch(function(err) {
        // Handle errors
        if (err.name === 'NotAllowedError') {
            showToast('Camera access was denied. Please enable camera permissions.', 'error');
        } else if (err.name === 'NotFoundError') {
            showToast('No camera found on this device', 'error');
        } else {
            showToast('Error accessing camera: ' + err.message, 'error');
        }
    });
}

// QR code scanning function
function scanQRCode(video) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    function scan() {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            // Set canvas dimensions to match video
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            
            // Draw video frame to canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            // Get image data
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            
            // Try to decode QR code
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: 'dontInvert',
            });
            
            // If QR code found
            if (code) {
                handleScannedQR(code.data);
                return; // Stop scanning
            }
        }
        
        // Continue scanning
        requestAnimationFrame(scan);
    }
    
    // Start scanning
    scan();
}

// Handle scanned QR code
function handleScannedQR(qrData) {
    // Parse QR code data (format: "ATTENDANCE:COURSE:CODE:DATE")
    const parts = qrData.split(':');
    
    if (parts.length < 4 || parts[0] !== 'ATTENDANCE') {
        showToast('Invalid QR code. Please scan a valid attendance QR code.', 'error');
        return;
    }
    
    const course = parts[1];
    const date = parts[3];
    
    // Show confirmation to student
    showAttendanceConfirmation(course, date);
    
    // Send attendance data to server (in a real implementation)
    markAttendanceOnServer(course, date);
}

// UI function to show confirmation
function showAttendanceConfirmation(course, date) {
    // Hide scanner
    document.getElementById('scannerContainer').style.display = 'none';
    
    // Format date
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString();
    const formattedTime = dateObj.toLocaleTimeString();
    
    // Update confirmation elements
    document.getElementById('attendanceCourseName').textContent = course;
    document.getElementById('attendanceDateDisplay').textContent = `${formattedDate} at ${formattedTime}`;
    
    // Show confirmation section
    document.getElementById('studentConfirmation').style.display = 'block';
}

// Function to call when page loads for mobile student view
function initMobileScanner() {
    // Check if we're on the student attendance page
    if (document.getElementById('studentAttendancePage')) {
        // Start camera when page loads
        startCamera();
        
        // Handle back button
        document.getElementById('backToDashboardBtn').addEventListener('click', () => {
            // Restart scanner when going back
            document.getElementById('studentConfirmation').style.display = 'none';
            document.getElementById('scannerContainer').style.display = 'block';
            startCamera();
        });
    }
}

// Call this when the page loads
document.addEventListener('DOMContentLoaded', initMobileScanner);
