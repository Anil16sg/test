import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import PurchaseDetails from "..";
import { windowSizes } from '../../utils/windowSize';

const mockData = [
  {
    id: 1,
    location: "https://picsum.photos/id/0/200",
    purchaseDate: "2020-12-27T00:00:00.000Z",
    category: "Food",
    description:
      "connecting the card won&#x27;t do anything, we need to back up the digital HDD driver!",
    price: 99882,
    name: "auxiliary generating microchip",
  },
  {
    id: 2,
    location: "https://picsum.photos/id/1/200",
    purchaseDate: "2020-12-28T00:00:00.000Z",
    category: "Technology",
    description:
      "I&#x27;ll synthesize the primary SMTP firewall, that should monitor the ADP feed!",
    price: 69706,
    name: "1080p backing up port",
  },
];

describe("Desktop view", () => {
  test("Should display, table header with name", async () => {
    render(<PurchaseDetails purchases={mockData} />);

    await act(async () => {
      expect(screen.getByTestId("heading_name")).toBeInTheDocument();
    });
  });

  test("Should display, two rows as per mock data", async () => {
    render(<PurchaseDetails purchases={mockData} />);

    await act(async () => {
      expect(screen.getAllByTestId("purchased-by-name")).toHaveLength(2);
    });
  });
});

describe("Mobile view", () => {

  test("Should display, table header with name", async () => {

    global.resizeTo(450, 800);
    render(<PurchaseDetails purchases={mockData} />);

    await act(async () => {
      expect(screen.getByTestId("mobile-container")).toBeInTheDocument();
    });
  });

  test("Should display, two rows as per mock data", async () => {
    render(<PurchaseDetails purchases={mockData} />);

    await act(async () => {
      expect(screen.getAllByTestId("purchased-by-name-mobile")).toHaveLength(2);
    });
  });
});
