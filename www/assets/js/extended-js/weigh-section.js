/* Weigh section style */

#weigh-section-tab {
    display: grid;
    grid-template-columns: 30% repeat(auto-fill, 35%);
}

#weigh-statistics-section-tab {
    display: grid;
    grid-template-columns: 50% 50%;
}

#weigh-section-tab .tab-head,
#weigh-statistics-section-tab .tab-head {
    text-align: center;
    padding: 8px 0px;
    background: #675C2F;
    color: #fff;
    font-weight: 400;
    text-transform: uppercase;
}

#tab-head-buy,
#weigh-statistics-section-tab #tab-head-pending {
    background: #bcb27b;
    color: #000;
}

#tab-content-estate,
#tab-content-shipment,
#tab-content-submitted,
#weigh-statistics-section,
.buy-statistics,
.estate-statistics,
.shipment-statistics {
    display: none;
}

#weigh-section-tab .tab-head {
    text-align: center;
    padding: 8px 0px;
    background: #675C2F;
    color: #fff;
    font-weight: 400;
    text-transform: uppercase;
}

#weigh-section-tab #tab-head-buy {
    background: #bcb27b;
    color: #000;
}

#tab-content-estate,
#tab-content-shipment,
#gross-ocr-data,
#tare-ocr-data {
    display: none;
}

#btn-group {
    display: grid;
    grid-template-columns: 50% 50%;
}

.submit-btn,
.save-btn {
    background: #bcb27b;
    color: #000;
    font-weight: bold;
    font-size: 1.1em;
    padding: 8px 50px;
}

.submit-btn {
    background: #675C2F;
    color: #fff;
    margin-left: 10px;
}

.pending-and-submitted-entries {
    background: #bcb27b;
    color: #000;
    font-size: 1em;
    padding: 8px 0px;
    text-align: center;
    margin-top: 20px;
    border-radius: 6px;
}

#weigh-tab-section-content .weigh-buy-tab-img-btn {
    border: 1px solid gray;
    box-shadow: none;
    color: #4f4f4f;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
}

#weigh-tab-section-content .weigh-buy-tab-img-btn span {
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 400;
    float: left;
    margin-left: -14px;
    padding: 4px 0px
}

#weigh-tab-section-content .weigh-buy-tab-img-btn i {
    float: right;
    margin-top: 5px;
    margin-right: -16px;
}

#gross-ocr-data,
#tare-ocr-data {
    width: 100%;
    padding-left: 8px;
}