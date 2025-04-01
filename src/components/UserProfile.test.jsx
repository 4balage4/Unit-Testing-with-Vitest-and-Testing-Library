import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";
import { test, expect, describe, vi } from "vitest";
import { afterEach } from "node:test";

afterEach(() => {
  vi.restoreAllMocks();
});



describe("UserProfile component", () => {

  test("initial render, recieves prop", async () => {
    render(<UserProfile id="5" />);

    const userId = await screen.findByText("User ID: 5");

    expect(userId).toBeInTheDocument();
  });

  test('ensures it renders with "Loading...', async () => {

    // setting up the mock results

    const mockResult = {
      id: 2,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    };

    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockResult,
    });

    render(<UserProfile id="2" />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    // resolving the issue, for the pending stat update which is causing act() warning
    // waits for the fetch call.
    await waitFor(() => {
      expect(globalThis.fetch).toHaveBeenCalled()
    })
  });

  test("renders the user profile", async () => {
    const mockResult = {
      id: 2,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    };

    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockResult,
    });

    render(<UserProfile id="2" />);

    const name = await screen.findByText(/name: Leanne Graham/i);
    const email = await screen.findByText(/email: sincere@april.biz/i);

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// }
