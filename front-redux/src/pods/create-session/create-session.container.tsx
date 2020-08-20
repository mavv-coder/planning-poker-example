import React from 'react';
import { CreateSessionComponent } from './create-session.component';
import { useHistory } from 'react-router-dom';
import { createRoom } from './create-session.api';
import { routes } from 'core/router';
import { AuthContext } from 'core';
import { useSelector, useDispatch } from 'react-redux';
import {
  roomRequestStartAction,
  setMasterNickname,
} from './create-session.actions';

export const CreateSessionContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  // TODO REMOVE AUTHCONTEXT

  const handleCreateSession = async (nickname: string) => {
    dispatch(roomRequestStartAction());
    dispatch(setMasterNickname(nickname));
  };

  return (
    <>
      <CreateSessionComponent onCreateSession={handleCreateSession} />
    </>
  );
};
