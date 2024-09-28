$(function () {
// -----------------------------------------------------------------------
  // Traffic Overview
  // -----------------------------------------------------------------------

  var chart = {
    series: [
      {
        name: "New Users",
        data: [5, 1, 17, 6, 15, 9, 6],
      },
      {
        name: "Users",
        data: [7, 11, 4, 16, 10, 14, 10],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "line",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      height: 320,
      stacked: false,
    },
    colors: ["var(--bs-gray-300)", "var(--bs-primary)"],
    plotOptions: {},
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 2,
      curve: "smooth",
      dashArray: [8, 0],
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      title: {
        // text: 'Age',
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      tickAmount: 4,
    },
    markers: {
      strokeColor: ["var(--bs-gray-300)", "var(--bs-primary)"],
      strokeWidth: 2,
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(
    document.querySelector("#traffic-overview"),
    chart
  );
  chart.render();


})



const userDetails = {
  email: "patrick370@gmail.com",
  password: "patrick?"
};

function checkSession() {
  const sessionActive = localStorage.getItem('sessionActive');
  const sessionExpiry = localStorage.getItem('sessionExpiry');
  const sessionExpiredFlag = localStorage.getItem('sessionExpired');

  if (!sessionActive || Date.now() > sessionExpiry || sessionExpiredFlag === 'true') {
      // Display the session expired modal
      document.getElementById('sessionExpiredModal').style.display = 'block';
      localStorage.setItem('sessionExpired', 'true'); // Mark session as expired, even if refreshed
  } else {
      // Display the dashboard content
      document.querySelector('.dashboard-container').style.display = 'block';
  }
}

function restartSession() {
  const enteredPassword = document.getElementById('reenterPassword').value;

  if (enteredPassword === userDetails.password) {
      const sessionExpiry = Date.now() + 120000; // 2 more minutes
      localStorage.setItem('sessionActive', true);
      localStorage.setItem('sessionExpiry', sessionExpiry);
      localStorage.setItem('sessionExpired', 'false'); // Reset the expired flag
      document.getElementById('sessionExpiredModal').style.display = 'none';
      document.querySelector('.dashboard-container').style.display = 'block'; // Show content again
  } else {
    alert("Invalid password");
  }
}

window.onload = function() {
  const sessionActive = localStorage.getItem('sessionActive');
  const sessionExpiredFlag = localStorage.getItem('sessionExpired');

  if (!sessionActive && sessionExpiredFlag !== 'true') {
      window.location.href = 'index.html'; // Redirect to login if no active session
  } else {
      checkSession();
  }
};

setInterval(checkSession, 5000); // Check session every 5 seconds