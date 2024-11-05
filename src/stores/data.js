import { ref } from 'vue'

import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', () => {
  const userData = ref([
    {
      uId: 1,
      name: 'Justin Septimus',
      email: 'justinseptimus@email.com',
      userStatus: 'Active',
      lastLogin: '14/APR/2020',
      paymetStatus: 'Paid',
      payDate: '15/APR/2020',
      amount: 200,
      currency: 'USD',
      userDetails: [
        {
          id: 1,
          date: '13/APR/2020',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
        {
          id: 2,
          date: '18/APR/2020',
          userActivity:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
          userDetail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
        },
        {
          id: 3,
          date: '12/APR/2020',
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
      lastLogin: '14/APR/2020',
      paymetStatus: 'Overdue',
      payDate: '15/APR/2020',
      amount: 200,
      currency: 'USD',
      userDetails: [
        {
          id: 2,
          date: '30/JUN/2022',
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
      lastLogin: '14/APR/2020',
      paymetStatus: 'Overdue',
      payDate: '15/APR/2020',
      amount: 600,
      currency: 'USD',
      userDetails: [
        {
          id: 3,
          date: '12/APR/2020',
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
      lastLogin: '14/APR/2020',
      paymetStatus: 'Paid',
      payDate: '15/APR/2020',
      amount: 900,
      currency: 'USD',
      userDetails: [
        {
          id: 4,
          date: '12/APR/2020',
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
      lastLogin: '14/APR/2020',
      paymetStatus: 'Unpaid',
      payDate: '15/APR/2020',
      amount: 200,
      currency: 'USD',
      userDetails: [
        {
          id: 5,
          date: '12/APR/2020',
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
      lastLogin: '14/APR/2020',
      paymetStatus: 'Unpaid',
      payDate: '15/APR/2020',
      amount: 500,
      currency: 'USD',
      userDetails: [
        {
          id: 6,
          date: '12/APR/2020',
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
      lastLogin: '14/APR/2020',
      paymetStatus: 'Overdue',
      payDate: '15/APR/2020',
      amount: 800,
      currency: 'USD',
      userDetails: [
        {
          id: 7,
          date: '12/APR/2020',
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
      lastLogin: '14/APR/2020',
      paymetStatus: 'Unpaid',
      payDate: '15/APR/2020',
      amount: 200,
      currency: 'USD',
      userDetails: [],
    },
    {
      uId: 9,
      name: 'Samantha snow',
      email: 'ssgirl@email.com',
      userStatus: 'Inactive',
      lastLogin: '14/APR/2020',
      paymetStatus: 'Overdue',
      payDate: '15/APR/2020',
      amount: 200,
      currency: 'USD',
      userDetails: [
        {
          id: 9,
          date: '12/APR/2020',
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
      lastLogin: '14/APR/2020',
      paymetStatus: 'Paid',
      payDate: '15/APR/2020',
      amount: 200,
      currency: 'USD',
      userDetails: [
        {
          id: 10,
          date: '12/APR/2020',
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
      if (el.uId == udata?.uId) {
        el.userDetails.forEach(
          el => (userDetails.value = [{ ...el, status: udata?.state }]),
        )
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
    const searchdata = userData?.value.filter(el => el.name.includes(udata))
    filteredUserData.value = [...searchdata]
  }

  return {
    userData,
    getDetails,
    userDetails,
    filterUserData,
    filteredUserData,
    searchUserData,
  }
})
