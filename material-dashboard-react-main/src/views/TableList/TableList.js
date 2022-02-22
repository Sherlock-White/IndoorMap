import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>已下载地图列表</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["地图名称", "省份", "城市", "详细地址"]}
              tableData={[
                ["维新馆", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["嘉亭荟", "上海市", "上海市", "嘉定区安亭镇墨玉南路1055号"],
                ["财富广场", "上海市", "上海市", "嘉定区安亭镇曹安公路5616号"],
                ["体育馆", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
                ["复楼", "上海市", "上海市", "嘉定区曹安公路4800号同济大学"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
