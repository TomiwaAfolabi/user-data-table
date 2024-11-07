<template>
  <main>
    <div class="dashboard">
      <div class="header">
        <h4>TABLE HEADING</h4>
        <div class="header-tab">
          <div class="tab-buttons">
            <div
              v-for="(tab, i) in tabViews"
              :key="i"
              class="t-button"
              :style="`${tab?.state ? 'border-bottom: solid #25213b;' : ''}`"
              @click="filterUser(tab)"
            >
              <p>{{ tab.type }}</p>
            </div>
          </div>
          <div class="tab-info">
            <p>
              Total payable amount: <span id="price">$900.00</span
              ><span>USD</span>
            </p>
          </div>
        </div>
      </div>

      <div class="data-div-filter">
        <div class="filterbutton">
          <FilterButton @sortedtype="data => sortUserData(data)" />
        </div>

        <SearchBar />
        <div class="paybutton">
          <PayButton
            button-title="PAY DUES"
            extra-class=" margin-top: 5px; display:flex; justify-content:end "
            @click="payDues()"
          />
        </div>
      </div>
      <!-- User Table  -->
      <div class="table-container">
        <div class="table-header">
          <div id="cbox"><input type="checkbox" /></div>
          <div id="name"><p>NAME</p></div>
          <div id="ustatus"><p>USER STATUS</p></div>
          <div id="pstatus"><p>PAYMENT STATUS</p></div>
          <div id="amt"><p>AMOUNT</p></div>

          <div id="v-more">
            <img src="../assets/icons/view-more-icon.png" alt="viewmore icon" />
          </div>
        </div>
        <div
          class="body-container"
          v-for="user in filteredUserData"
          :key="user?.uId"
        >
          <!-- User Table -->
          <div class="table-body">
            <div class="checkbox">
              <div id="cbox">
                <input
                  type="checkbox"
                  :id="user.uId"
                  :value="user.uId"
                  :name="user.name"
                  @click="e => (payDuesId = e.target.value)"
                />
              </div>
              <div
                v-if="!showTable"
                id="icon"
                @click="
                  toogleShowTable(),
                    getDetails({ uId: user?.uId, state: showTable })
                "
              >
                <img
                  src="../assets/icons/arrow-down-icon.png"
                  alt="drop down icon"
                />
              </div>
              <div
                v-else
                id="icon"
                @click="
                  toogleShowTable(),
                    getDetails({ uId: user?.uId, state: showTable })
                "
              >
                <img
                  src="../assets/icons/arrow-up-icon.png"
                  alt="drop down icon"
                />
              </div>
            </div>
            <div class="uName">
              <p id="name">{{ user?.name }}</p>
              <p id="email">{{ user?.email }}</p>
            </div>
            <div class="ustatus">
              <div
                class="status"
                :style="`${user?.userStatus == 'Active' ? 'background-color: #E6E6F2;  max-width: 58px;' : ''} ${user?.userStatus == 'Inactive' ? ' background-color: #F2F0F9; max-width:75px;' : ''}`"
              >
                <div
                  class="dot"
                  :style="`${user?.userStatus === 'Active' ? 'background-color: #4A4AFF;' : ''} ${user?.userStatus === 'Inactive' ? 'background-color: #6E6893;' : ''}`"
                />
                <p
                  :style="`${user?.userStatus === 'Active' ? ' color: #4A4AFF;' : ''} ${user?.userStatus === 'Inactive' ? ' color: #6E6893;' : ''}`"
                >
                  {{ user?.userStatus }}
                </p>
              </div>

              <p id="llogin">
                Last login: <span>{{ user?.lastLogin }}</span>
              </p>
            </div>
            <div class="pstatus">
              <div
                class="status"
                :style="`${user?.paymetStatus === 'Overdue' ? 'background-color: #FFE0E0; max-width:80px; ' : ''} ${user?.paymetStatus === 'Paid' ? 'background-color: #CDFFCD;' : ''} ${user?.paymetStatus === 'Unpaid' ? 'background-color: #FFECCC; max-width: 70px;' : ''}`"
              >
                <div
                  class="dot"
                  :style="`${user?.paymetStatus === 'Overdue' ? ' background-color:#D30000;' : ''} ${user?.paymetStatus === 'Paid' ? 'background-color: #007F00;' : ''} ${user?.paymetStatus === 'Unpaid' ? ' background-color:#965E00;  max-width: 10px;' : ''}`"
                />
                <p
                  :style="`${user?.paymetStatus === 'Overdue' ? 'color:#D30000;' : ''} ${user?.paymetStatus === 'Paid' ? 'color: #007F00;' : ''} ${user?.paymetStatus === 'Unpaid' ? 'color:#965E00;' : ''}`"
                >
                  {{ user?.paymetStatus }}
                </p>
              </div>
              <p id="pdate">
                {{
                  `${user?.paymetStatus == 'Paid' ? 'Paid' : ''} ${user?.paymetStatus === 'Unpaid' ? 'Dues' : ''} ${user?.paymetStatus === 'Overdue' ? 'Dued' : ''} on:`
                }}
                <span>{{ user?.payDate }}</span>
              </p>
            </div>
            <div class="amount">
              <p>${{ user?.amount }}</p>
              <p id="cur">{{ user?.currency }}</p>
            </div>

            <div class="v-more-data">
              <div id="vm"><p>View More</p></div>
              <div id="icon">
                <img
                  src="../assets/icons/view-more-icon.png"
                  alt="viewmore icon"
                />
              </div>
            </div>
          </div>
          <!-- User Detail Table -->
          <div class="detail-table-container" v-if="user?.status">
            <div class="detail-table-header">
              <div class="c-box"></div>
              <div id="udate"><p>DATE</p></div>
              <div id="uactivity"><p>USER ACTIVITY</p></div>
              <div id="udetail">
                <p>DETAIL</p>
                <img src="../assets/icons/detail-icon.png" alt="detail icon" />
              </div>
            </div>
            <div
              v-for="userdetails in userDetails"
              :key="userdetails?.id"
              class="detail-table-body"
            >
              <div class="detail-body" :key="userdetails?.id">
                <div></div>
                <div class="udate">
                  <p id="name">{{ userdetails?.date }}</p>
                </div>
                <div class="uactivity">
                  <p id="name">{{ userdetails?.userActivity }}</p>
                </div>
                <div class="udetail">
                  <p id="name">{{ userdetails?.userDetail }}</p>
                </div>
              </div>
            </div>
            <div v-show="!userDetails.length" class="no-detail-body">
              <div>NO RECORDS FOUND</div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer -->
      <div class="table-footer">
        <div><p>Rows per page: 10</p></div>
        <p id="pages">1-10 of 278</p>

        <div></div>
      </div>
    </div>
  </main>
</template>
<script setup>
import FilterButton from './reusables/FilterButton.vue'
import SearchBar from './reusables/SearchBar.vue'
import PayButton from './reusables/PayButton.vue'
import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const tabViews = ref([
  { type: 'All', state: false },
  { type: 'Paid', state: false },
  { type: 'Unpaid', state: false },
  { type: 'Overdue', state: false },
])
const dataStore = useDataStore()
const { getDetails, filterUserData, sortUserData, payUserDues } = dataStore
const { filteredUserData, userDetails } = storeToRefs(dataStore)
const showTable = ref(false)
const payDuesId = ref('')

const toogleShowTable = () => {
  getDetails()
  showTable.value = !showTable.value
}

const filterUser = data => {
  tabViews.value.forEach(el => {
    if (el.type == data?.type) {
      el.state = true
    } else {
      el.state = false
    }
  })
  filterUserData(data?.type)
}
const payDues = () => {
  if (payDuesId.value) {
    payUserDues(payDuesId.value)
  }
}
</script>
<style lang="scss">
.dashboard {
  padding: 20px;
  display: grid;

  @media screen and (max-width: 584px) {
    padding: 5px;
  }
  @media screen and (max-width: 611px) {
    text-align: center;
  }
  .header {
    font-size: 14px;
    max-width: 100vw;

    h4 {
      color: #6e6893;
      @media screen and (max-width: 611px) {
        font-size: 12px;
      }
    }
    // Buttons and Total Paybable amount
    .header-tab {
      display: flex;
      border-bottom: solid #c6c2de;
      border-width: 1px;
      color: #6e6893;
      justify-content: space-between;
      // Buttons and Total Paybable amount responsiveness
      @media screen and (max-width: 584px) {
        width: 100%;
        max-width: 100vw;
      }

      // Buttons
      .tab-buttons {
        display: flex;
        flex-direction: row;
        gap: 20px;
        @media screen and (max-width: 611px) {
          justify-content: center;
        }

        .t-button {
          font-weight: 500;
          cursor: pointer;
          text-align: center;
          padding: 0px 10px 0px 10px;
          @media screen and (max-width: 611px) {
            font-size: 12px;
          }
          @media screen and (max-width: 611px) {
            padding: 0px;
          }
        }
        .t-button:hover {
          color: #25213b;
          border-bottom: solid #25213b;
          border-width: 1px;
        }

        @media screen and (max-width: 545px) {
          gap: 8px;
        }
        @media screen and (max-width: 555px) {
          justify-content: space-evenly;
        }
      }

      // Total Paybable amount Info
      .tab-info {
        display: flex;
        justify-content: end;

        @media screen and (max-width: 584px) {
          justify-content: center;
        }

        span {
          font-size: 18px;
        }
        #price {
          color: #6d5bd0;
          font-weight: 700;
          padding-right: 5px;
        }
        // tab info responsiveness
        @media screen and (max-width: 611px) {
          width: auto;
        }
        @media screen and (max-width: 555px) {
          justify-content: center;

          p {
            font-size: 13px;
          }
          span {
            font-size: 15px;
          }
        }
      }
      // header tab responsiveness
      @media screen and (max-width: 611px) {
        justify-content: space-between;
      }
      @media screen and (max-width: 584px) {
        flex-direction: column;
      }
    }
  }
  //Data div Filter
  .data-div-filter {
    display: flex;
    padding: 20px;
    background-color: #ffffff;
    gap: 25px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin-top: 10px;

    // Data div Filter responsiveness
    @media screen and (max-width: 584px) {
      width: 100%;
      max-width: 90vw;
    }

    .filterbutton {
      width: 20%;
    }
    .paybutton {
      width: 100%;
      display: flex;
      justify-content: end;

      @media screen and (max-width: 650px) {
        width: auto;
        justify-content: start;
      }
    }
  }

  //  Data div Css
  .table-container {
    @media screen and (max-width: 584px) {
      margin: 0px;
      overflow: auto;
    }

    .table-header {
      display: flex;
      justify-content: space-between;
      color: #6e6893;
      border: solid 1px #d9d5ec;
      overflow: auto;

      @media screen and (max-width: 918px) {
        font-size: 8px;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: start;
        max-width: auto;
        padding-left: 14px;
      }
      #cbox {
        max-width: 109px;
        margin-top: 10px;
        @media screen and (max-width: 611px) {
          max-width: 80px;
          padding-left: 0px;
        }
      }
      #cbox input {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
      #ustatus {
        padding-left: 10px;
      }

      #v-more {
        width: 10%;
        display: flex;
        justify-content: end;
        padding-right: 15px;
        margin-top: 10px;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
    .body-container {
      .table-body {
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
        line-height: 5px;
        padding-top: 10px;
        overflow: auto;

        border: solid 1px #d9d5ec;
        @media screen and (max-width: 735px) {
          line-height: 15px;
        }

        div {
          width: 100%;
        }
        .checkbox {
          max-width: 100px;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          padding-left: 14px;
          @media screen and (max-width: 750px) {
            padding-left: 5px;
          }
          #cbox {
            input {
              width: 20px;
              height: 20px;
              cursor: pointer;
            }
          }
          #icon {
            margin-top: 7px;
            cursor: pointer;
          }
        }
        .uName {
          padding-left: 25px;

          @media screen and (max-width: 1130px) {
            padding-left: 0px;
          }
          #name {
            color: #25213b;
          }
          #email {
            color: #6e6893;
          }
          @media screen and (max-width: 1130px) {
            line-height: 8px;
            font-size: 8px;
          }
        }
        .ustatus {
          padding-left: 55px;
          @media screen and (max-width: 1130px) {
            padding-left: 0px;
            font-size: 8px;
          }
          .status {
            display: flex;
            gap: 4px;
            height: 19px;
            text-align: start;
            border-radius: 10px;
            background-color: #e6e6f2;
            padding: 2px 5px 2px 5px;
            @media screen and (max-width: 1130px) {
              padding: 2px 2px 2px 5px;
              text-align: start;
            }

            .dot {
              border-radius: 50%;
              width: 8px;
              height: 8px;
              align-self: center;
            }
            p {
              margin: 0px;
              font-weight: 500;
              padding-top: 8px;

              @media screen and (max-width: 1130px) {
                font-size: 8px;
              }
              @media screen and (max-width: 735px) {
                padding-top: 2px;
              }
            }
          }
          #llogin {
            color: #6e6893;
            @media screen and (max-width: 1130px) {
              font-size: 8px;
            }
          }
        }

        .pstatus {
          padding-left: 85px;
          @media screen and (max-width: 1130px) {
            padding-left: 0px;
            font-size: 8px;
          }
          .status {
            display: flex;
            gap: 4px;
            max-width: 50px;
            height: 19px;
            text-align: start;
            border-radius: 10px;

            padding: 2px 5px 2px 5px;
            @media screen and (max-width: 1130px) {
              padding: 2px 2px 2px 5px;
              text-align: start;
            }

            @media screen and (max-width: 1130px) {
              text-align: start;
            }
            p {
              font-weight: 500;
              padding-top: 8px;
              margin: 0px;
              @media screen and (max-width: 1130px) {
                font-size: 8px;
              }
              @media screen and (max-width: 735px) {
                padding-top: 2px;
              }
            }
          }
          .dot {
            border-radius: 50%;
            width: 8px;
            height: 8px;
            align-self: center;
          }

          #pdate {
            color: #6e6893;
            @media screen and (max-width: 1130px) {
              font-size: 8px;
            }
          }
        }

        .amount {
          text-align: center;
          max-width: auto;
          #cur {
            color: #6e6893;
          }
          @media screen and (max-width: 570px) {
            text-align: center;
          }
          @media screen and (max-width: 1130px) {
            line-height: 10px;
            padding: 0px;
            font-size: 13px;
          }
        }

        .v-more-data {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 200px;

          @media screen and (max-width: 1130px) {
            font-size: 13px;
            line-height: 14px;
          }
          #vm {
            display: flex;
            justify-content: end;
            cursor: pointer;
            p {
              margin: 0px;
              color: #6e6893;
            }
          }
          #icon {
            display: flex;
            justify-content: end;
            padding-right: 18px;
            @media screen and (max-width: 1130px) {
              width: auto;
            }

            img {
              cursor: pointer;
            }
          }
        }
      }
      .detail-table-container {
        .detail-table-header {
          width: 100%;
          display: flex;
          background-color: #f2f0f9;
          color: #6e6893;

          div {
            width: 100%;
            max-width: 180px;
          }

          .udate {
            color: #6e6893;
          }
          #uactivity {
            width: 50%;
            max-width: 300px;
          }

          #udetail {
            display: flex;
            gap: 10px;
            align-items: center;
            img {
              width: 15px;
              height: 15px;
            }
          }
        }
        .detail-table-body {
          display: flex;
          flex-direction: column;
          background-color: #f4f2ff;
          border: solid 1px #d9d5ec;
          .detail-body {
            display: flex;
            width: 100%;
            div {
              width: 100%;
              max-width: 165px;
            }
            .udate {
              color: #6e6893;
            }
            .uactivity {
              max-width: 300px;
            }
            .id {
              max-width: 100px;
            }
            .udetail {
              max-width: 525px;
            }
          }
        }
        .no-detail-body {
          display: flex;
          justify-content: center;
          height: 100px;
          background: #f4f2ff;
          align-items: center;
          color: #6e6893;
        }
      }
    }
  }
  // Table footer Css
  .table-footer {
    width: 100%;
    height: 45px;
    background-color: #f4f2ff;
    display: flex;
    justify-content: end;
    gap: 50px;
    color: #6e6893;
    border-top: 0px;
    border: solid 1px #d9d5ec;
    #pages {
      font-size: 12px;
      font-weight: 600;
      padding-top: 6px;
    }
  }
}
</style>
