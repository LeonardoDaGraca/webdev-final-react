import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import {Helmet} from "react-helmet";
import "./live.css"; // You can create this style file for your live page

export default function Live() {
  return (
    <>
      {/* <Header /> */}
      <div>
      <div 
        id="wg-api-basketball-standings"
        data-host="v1.basketball.api-sports.io"
        data-key="6c49c986e5c5974216fd94bb09e09bdf"
        data-league=""
        data-season=""
        data-theme=""
        data-show-errors="false"
        data-show-logos="true"
        class="wg_loader">
    </div>
    <Helmet>
    <script
        type="module"
        src="https://widgets.api-sports.io/2.0.3/widgets.js">
    </script>
    </Helmet>
        </div>
      {/* <Sidebar /> */}
    </>
  );
}


{/* <div 
id="wg-api-football-games"
  data-host="v3.football.api-sports.io"
  data-key="6c49c986e5c5974216fd94bb09e09bdf"
  data-date=""
  data-league=""
  data-season=""
  data-theme=""
  data-refresh="60"
  data-show-toolbar="true"
  data-show-errors="false"
  data-show-logos="true"
  data-modal-game="true"
  data-modal-standings="true"
  data-modal-show-logos="true"/>
</div>
<Helmet>
<script
  type="module"
  src="https://widgets.api-sports.io/2.0.3/widgets.js">
</script>
</Helmet> */}
