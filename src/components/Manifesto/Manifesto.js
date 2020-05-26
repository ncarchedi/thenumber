import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    maxWidth: theme.breakpoints.values.md,
    margin: theme.spacing(0, "auto"),
    "& td": {
      verticalAlign: "text-top",
    },
  },
}));

export default function Manifesto() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h2" align="center" gutterBottom>
        The Manifesto
      </Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ width: "50%" }}>
                <Typography variant="body1">
                  <b>No</b>, we don’t want to use your “free” product in
                  exchange for being blasted with ads for financial products we
                  don’t want or need. (
                  <Link
                    href="https://www.dropbox.com/s/7xr511z1ejubrb9/mint%201.png?dl=0"
                    target="_'blank"
                  >
                    Mint
                  </Link>
                  )
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  <b>Yes</b>, we are willing to pay you directly if we get value
                  from your product.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  <b>No</b>, we don’t want you to share our financial
                  information with third parties. (
                  <Link
                    href="https://www.dropbox.com/s/ilzk0ggzgnu74ib/mint%202.png?dl=0"
                    target="_'blank"
                  >
                    Mint
                  </Link>
                  )
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  <b>Yes</b>, we want to keep our data private—because it’s our
                  data, not yours.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  <b>No</b>, we don’t want a complimentary financial
                  consultation with one of your advisors. (
                  <Link
                    href="https://www.dropbox.com/s/57wb2e7phacoqzb/personal%20capital%201.PNG?dl=0"
                    target="_'blank"
                  >
                    Personal Capital
                  </Link>
                  )
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  <b>Yes</b>, we are smart enough to figure this out for
                  ourselves.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  <b>No</b>, we don’t want you to manage our money. (
                  <Link
                    href="https://www.dropbox.com/s/l9t4hwep5sohq3s/personal%20capital%202.png?dl=0"
                    target="_'blank"
                  >
                    Personal Capital)
                  </Link>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  <b>Yes</b>, we want to manage our own money, because no one
                  cares about it as much as we do.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  <b>No</b>, we don’t want to read a book so we can understand
                  how to use your product. (
                  <Link
                    href="https://www.dropbox.com/s/lzgmaaxfgym0ux6/ynab.png?dl=0"
                    target="_'blank"
                  >
                    YNAB
                  </Link>
                  )
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  <b>Yes</b>, we want your product to be self-explanatory.
                  (Plus, we’re busy.)
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  <b>No</b>, we don’t want “product recommendations” that you
                  make money off of. (
                  <Link
                    href="https://www.dropbox.com/s/8uu7b9b07390vwc/nerdwallet%201.png?dl=0"
                    target="_'blank"
                  >
                    NerdWallet
                  </Link>
                  )
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  <b>Yes</b>, we want recommendations—if you're not profiting
                  from them.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  <b>No</b>, we don’t want you to check our credit score (behind
                  our backs) so you can know what ads to show us. (
                  <Link
                    href="https://www.dropbox.com/s/dk8wimz7hs3wn0p/nerdwallet%202.png?dl=0"
                    target="_'blank"
                  >
                    NerdWallet
                  </Link>
                  )
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  <b>Yes</b>, if I want you to know something about me, I’ll
                  tell you directly.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  <b>No</b>, we don’t want to use a calculator that looks like
                  it was built in the early 90s. (
                  <Link
                    href="https://www.dropbox.com/s/xdhq9hqzcncqubo/bankrate.png?dl=0"
                    target="_'blank"
                  >
                    Bankrate
                  </Link>
                  ,{" "}
                  <Link
                    href="https://www.dropbox.com/s/8p6v7d6o72lqqa1/aarp.png?dl=0"
                    target="_'blank"
                  >
                    AARP
                  </Link>
                  )
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  <b>Yes</b>, we’ve used well-designed products and we’re not
                  going back.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  <b>No</b>, we don’t want to compare interest rates on savings
                  accounts. (
                  <Link
                    href="https://www.dropbox.com/s/9awl1k7bmkzsfoh/smartasset.png?dl=0"
                    target="_'blank"
                  >
                    SmartAsset
                  </Link>
                  )
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  <b>Yes</b>, I’m happy with my current interest rate.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  <b>No</b>, a pie chart isn’t good enough. (
                  <Link
                    href="https://www.dropbox.com/s/xlulz1nc703akoq/calculator.net.png?dl=0"
                    target="_'blank"
                  >
                    calculator.net
                  </Link>
                  )
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  <b>Yes</b>, I’m capable of understanding a line chart.
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
