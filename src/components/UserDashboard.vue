<template>
  <main>
    <div class="dashboard">
      <div class="header">
        <h4>TABLE HEADING</h4>
        <div class="header-tab">
          <div class="tab-buttons">
            <div v-for="(tab, i) in tabViews" :key="i" class="t-button">
              <p>{{ tab }}</p>
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

      <div class="data-table-filter">
        <FilterButton />
        <SearchBar />
        <div class="button">
          <PayButton
            button-title="PAY DUES"
            extra-class=" margin-top: 5px; display:flex; justify-content:end"
          />
        </div>
      </div>

      <table class="data-table">
        <tbody class="data-table-body">
          <tr class="table-header">
            <th><input type="checkbox" /></th>
            <th>NAME</th>
            <th>USER STATUS</th>
            <th>PAYMENT STATUS</th>
            <th id="amt">AMOUNT</th>
            <th id="v-more">
              <img
                src="../assets/icons/view-more-icon.png"
                alt="viewmore icon"
              />
            </th>
          </tr>
          <tr class="table-body" v-for="user in userData" :key="user?.id">
            <td class="cbox">
              <input type="checkbox" />
            </td>
            <td class="uName">
              <p id="name">{{ user?.name }}</p>
              <p id="email">{{ user?.email }}</p>
            </td>
            <td class="ustatus">
              <div class="status">
                <div class="dot" />
                <p>
                  {{ user?.userStatus }}
                </p>
              </div>

              <p id="llogin">
                Last login: <span>{{ user?.lastLogin }}</span>
              </p>
            </td>
            <td class="pstatus">
              <div class="status">
                <div class="dot" />
                <p>
                  {{ user?.paymetStatus }}
                </p>
              </div>
              <p id="pdate">
                {{ user?.paymetStatus == 'Paid' ? 'Paid' : 'N/A' }} on:
                <span>{{ user?.payDate }}</span>
              </p>
            </td>
            <td class="amount">
              <p>${{ user?.amount }}</p>
              <p>{{ user?.currency }}</p>
            </td>
            <td class="v-more-data">
              <div id="vm"><p>View More</p></div>
              <div id="icon">
                <img
                  src="../assets/icons/view-more-icon.png"
                  alt="viewmore icon"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script setup>
import FilterButton from './reusables/FilterButton.vue'
import SearchBar from './reusables/SearchBar.vue'
import PayButton from './reusables/PayButton.vue'

const tabViews = ['All', 'Paid', 'Unpaid', 'Overdue']
const userData = [
  {
    uId: 1,
    name: 'Justin Septimus',
    email: 'example@email.com',
    userStatus: 'Active',
    lastLogin: '14/APR/2020',
    paymetStatus: 'Paid',
    payDate: '15/APR/2020',
    amount: 200,
    currency: 'USD',
  },
]
</script>
<style lang="scss">
.dashboard {
  padding: 20px;
  display: grid;
  gap: 10px;

  .header {
    width: 100%;
    font-size: 14px;

    h4 {
      color: #6e6893;
    }
    // Buttons and Total Paybable amount
    .header-tab {
      display: flex;
      border-bottom: solid #c6c2de;
      border-width: 1px;
      color: #6e6893;
      justify-content: space-between;

      // Buttons
      .tab-buttons {
        display: flex;
        flex-direction: row;
        gap: 20px;

        .t-button {
          font-weight: 500;
          cursor: pointer;
          text-align: center;
          padding: 0px 10px 0px 10px;
          @media screen and (max-width: 611px) {
            padding: 0px;
          }
        }
        .t-button:hover {
          color: #25213b;
          border-bottom: solid #25213b;
          border-width: 1px;
        }
        // Buttons responsiveness
        @media screen and (max-width: 611px) {
          width: auto;
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
      @media screen and (max-width: 555px) {
        flex-direction: column;
      }
    }
  }
  //Data Table Filter
  .data-table-filter {
    display: flex;
    padding: 20px;
    background-color: #ffffff;
    gap: 25px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    .button {
      width: 100%;
      display: flex;
      justify-content: end;
      @media screen and (max-width: 650px) {
        width: auto;
        justify-content: start;
      }
    }
  }

  //  Data Table Css
  .data-table {
    background: #f4f2ff;
    border-collapse: collapse;
    border: none;

    .data-table-body {
      // Table Headear CSS
      .table-header {
        th {
          text-align: start;
          padding-left: 20px;
          color: #6e6893;
          @media screen and (max-width: 1130px) {
            font-size: 12px;
          }
          input {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }
        #amt {
          text-align: end;
        }

        #v-more {
          text-align: end;
          padding-right: 15px;
        }
      }

      // Table Body CSS
      .table-body {
        background-color: #ffffff;
        height: 60px;

        td {
          width: 18.5%;
          height: 60px;
          line-height: 10px;
          padding: 8px 0px 0px 20px;
          @media screen and (max-width: 1130px) {
            line-height: 18px;
          }
        }
        .cbox {
          width: 8%;
          input {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }
        .uName {
          #name {
            color: #25213b;
          }
          #email {
            color: #6e6893;
          }
          @media screen and (max-width: 1130px) {
            line-height: 8px;
            font-size: 13px;
          }
        }
        .ustatus {
          .status {
            display: flex;
            gap: 4px;
            max-width: 58px;
            height: 19px;
            text-align: center;
            border-radius: 10px;
            background-color: #e6e6f2;
            padding: 2px 5px 2px 5px;
            @media screen and (max-width: 1130px) {
              padding: 2px 2px 2px 5px;
              text-align: start;
            }

            .dot {
              background-color: #4a4aff;
              border-radius: 50%;
              width: 8px;
              height: 8px;
              align-self: center;
            }
            p {
              margin: 0px;
              font-weight: 500;
              padding-top: 5px;
              color: #4a4aff;
              @media screen and (max-width: 1130px) {
                font-size: 13px;
                padding-top: 2px;
              }
            }
          }
          #llogin {
            color: #6e6893;
            @media screen and (max-width: 1130px) {
              font-size: 11px;
            }
          }
        }

        .pstatus {
          .status {
            display: flex;
            gap: 4px;
            max-width: 50px;
            height: 19px;
            text-align: center;
            border-radius: 10px;
            background-color: #cdffcd;
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
              padding-top: 5px;
              color: #007f00;
              margin: 0px;
              @media screen and (max-width: 1130px) {
                font-size: 13px;
                padding-top: 2px;
              }
            }
          }
          .dot {
            background-color: #007f00;
            border-radius: 50%;
            width: 8px;
            height: 8px;
            align-self: center;
          }
          #pdate {
            color: #6e6893;
            @media screen and (max-width: 1130px) {
              font-size: 11px;
            }
          }
        }

        .amount {
          width: 20%;
          text-align: end;
          padding-left: 50px;
          @media screen and (max-width: 570px) {
            text-align: center;
          }
          @media screen and (max-width: 1130px) {
            line-height: 8px;
            padding: 0px;
            font-size: 13px;
          }
        }

        .v-more-data {
          width: 100%;
          max-width: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 8px;
          @media screen and (max-width: 1130px) {
            font-size: 13px;
            line-height: 13px;
          }
          #vm {
            width: 80%;
            display: flex;
            justify-content: end;
            cursor: pointer;
            p {
              margin: 0px;

              color: #6e6893;
            }
          }
          #icon {
            width: 20%;
            display: flex;
            justify-content: end;
            padding-right: 35px;
            img {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
