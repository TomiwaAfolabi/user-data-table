import { ref } from 'vue'

import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', () => {
  const userData = ref([
    {
      uId: 1,
      name: 'Justin Septimus',
      email: 'justinseptimus@email.com',
      userStatus: 'Active',
      lastLogin: '14-06-2006',
      paymetStatus: 'Paid',
      payDate: '11-10-2006',
      amount: 200,
      currency: 'USD',
      userDetails: [
        {
          id: 1,
          date: '13-04-2020',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
        {
          id: 2,
          date: '18-04-2020',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
        {
          id: 3,
          date: '02-02-2022',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
      ],
    },
    {
      uId: 2,
      name: 'Micheal Balogun',
      email: 'michealbalogun@email.com',
      userStatus: 'Active',
      lastLogin: '01-01-2019',
      paymetStatus: 'Overdue',
      payDate: '05-05-2019',
      amount: 200,
      currency: 'USD',
      userDetails: [
        {
          id: 2,
          date: '30-10-2022',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
      ],
    },
    {
      uId: 3,
      name: 'David Greene',
      email: 'davaidgreen@email.com',
      userStatus: 'Active',
      lastLogin: '20-11-2009',
      paymetStatus: 'Overdue',
      payDate: '15-04-2020',
      amount: 600,
      currency: 'USD',
      userDetails: [
        {
          id: 3,
          date: '18-06-2016',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
      ],
    },
    {
      uId: 4,
      name: 'Sarah Bellick',
      email: 'sarahbellick@email.com',
      userStatus: 'Active',
      lastLogin: '05-07-2023',
      paymetStatus: 'Paid',
      payDate: '06-10-2016',
      amount: 900,
      currency: 'USD',
      userDetails: [
        {
          id: 4,
          date: '09-09-2008',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
      ],
    },
    {
      uId: 5,
      name: 'Thomas Sankara',
      email: 'thomassan@email.com',
      userStatus: 'Inactive',
      lastLogin: '20-10-2016',
      paymetStatus: 'Unpaid',
      payDate: '05-09-2010',
      amount: 200,
      currency: 'USD',
      userDetails: [
        {
          id: 5,
          date: '05-07-2009',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
      ],
    },
    {
      uId: 6,
      name: 'Olamitoro Matthews',
      email: 'olamatthews@email.com',
      userStatus: 'Active',
      lastLogin: '11-02-2015',
      paymetStatus: 'Unpaid',
      payDate: '4-12-2014',
      amount: 500,
      currency: 'USD',
      userDetails: [
        {
          id: 6,
          date: '20-10-2020',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
      ],
    },
    {
      uId: 7,
      name: 'Dapo Johsua',
      email: 'dapjosh@email.com',
      userStatus: 'Inactive',
      lastLogin: '11-11-2016',
      paymetStatus: 'Overdue',
      payDate: '22-02-2008',
      amount: 800,
      currency: 'USD',
      userDetails: [
        {
          id: 7,
          date: '16-03-2018',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
      ],
    },
    {
      uId: 8,
      name: 'Helene Bello',
      email: 'helenb@email.com',
      userStatus: 'Active',
      lastLogin: '10-04-2018',
      paymetStatus: 'Unpaid',
      payDate: '12-06-2011',
      amount: 200,
      currency: 'USD',
      userDetails: [],
    },
    {
      uId: 9,
      name: 'Samantha snow',
      email: 'ssgirl@email.com',
      userStatus: 'Inactive',
      lastLogin: '10-12-2003',
      paymetStatus: 'Overdue',
      payDate: '28-05-2005',
      amount: 200,
      currency: 'USD',
      userDetails: [
        {
          id: 9,
          date: '11-11-2006',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
      ],
    },
    {
      uId: 10,
      name: 'Emmanuel Bright',
      email: 'brightemma@email.com',
      userStatus: 'Active',
      lastLogin: '25-04-2023',
      paymetStatus: 'Paid',
      payDate: '16-03-2012',
      amount: 200,
      currency: 'USD',
      userDetails: [
        {
          id: 10,
          date: '13-06-2006',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
      ],
    },
  ])
  const userDetails = ref([])
  const filteredUserData = ref([...userData.value])

  function getDetails(udata) {
    userData?.value.map(el => {
      if ((udata?.state == false) & (el.status == true)) {
        el.status = udata?.state
        userDetails.value = []
      }
      if (el.uId == udata?.uId) {
        el.status = udata?.state
        userDetails.value = [...el.userDetails]
      }
    })
  }
  function filterUserData(udata) {
    let data = []
    return userData?.value.filter(el => {
      if (udata == el.paymetStatus) {
        data.push(el)
        filteredUserData.value = [...data.flat()]
      }
      if (udata == 'All') {
        filteredUserData.value = [...userData.value]
      }
    })
  }
  function searchUserData(udata) {
    const searchdata = userData?.value.filter(el =>
      el.name.toLowerCase().includes(udata.toLowerCase()),
    )
    filteredUserData.value = [...searchdata]
  }
  const sortUserData = data => {
    if (data == 'default')
      filteredUserData.value.sort(() => {
        return 0
      })
    if (data == 'firstname')
      filteredUserData.value.sort((a, b) => {
        if (a?.name < b?.name) {
          return -1
        }
        if (a?.name > b?.name) {
          return 1
        }
        return 0
      })
    if (data == 'lastname')
      filteredUserData.value.sort((a, b) => {
        if (a?.name > b?.name) {
          return -1
        }
        if (a?.name > b?.name) {
          return 1
        }
        return 0
      })
    if (data == 'duedate')
      filteredUserData.value.sort((a, b) => {
        const initial = new Date(a?.payDate).getTime()
        const final = new Date(b?.payDate).getTime()
        return initial - final
      })

    if (data == 'lastlogin')
      filteredUserData.value.sort((a, b) => {
        const initial = new Date(a?.lastLogin).getTime()
        const final = new Date(b?.lastLogin).getTime()
        return initial - final
      })
  }
  const payUserDues = data => {
    userData.value.forEach(el => {
      if (el.uId == data) {
        el.paymetStatus = 'Paid'
      }
    })
  }

  return {
    userData,
    getDetails,
    userDetails,
    filterUserData,
    filteredUserData,
    searchUserData,
    sortUserData,
    payUserDues,
  }
})
