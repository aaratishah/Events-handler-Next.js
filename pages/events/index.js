import React from "react";
import {getAllEvents} from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

const Events = () => {
  const router = useRouter()

  const events = getAllEvents()

  const findEventsHandler = (year, month) => {
    const fullpath = `events/${year}/${month}`
    router.push(fullpath)
  }
  return (
    <div>
      <EventsSearch onSearch = {findEventsHandler} />
      <EventList items = {events} />
    </div>
  );
};

export default Events;
