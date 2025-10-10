export function removeAsterisks(text: string): string {
  return text.replace(/\*/g, '');
};

export const formatDate = (dateInput: string | Date): string => {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  if (isNaN(date.getTime())) return "Invalid date"; // handle bad inputs

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Get ordinal suffix
  const getOrdinal = (n: number): string => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getOrdinal(day)} ${month}, ${year}`;
};


export const formatDateDeprecated = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }); // e.g., "April"
  const year = date.getFullYear();

  // Get ordinal suffix
  const getOrdinal = (n: number): string => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getOrdinal(day)} ${month}, ${year}`;
};

  // const handleFetch = async (id: string) => {
  //   const query = `
  //   query GetPost($slug: ID!) {
  //     post(id: $slug, idType: SLUG) {
  //       title
  //       content
  //       featuredImage {
  //         node {
  //           sourceUrl
  //         }
  //       }
  //     }
  //   }
  // `;

  //   setGlobalLoading && setGlobalLoading(true);
  //   try {
  //     const data = await client.request(query, { slug: id });

  //     console.log("this is the data from graphQl Wordpress", data);
  //     if (data && data) {
  //       // setNews(data?.posts.nodes);
  //     }
  //     setGlobalLoading && setGlobalLoading(false);
  //   } catch (err) {
  //     setGlobalLoading && setGlobalLoading(false);
  //   }
  // };