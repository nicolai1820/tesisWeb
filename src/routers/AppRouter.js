import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { Loading } from "../components/structure/loading/Loading";
import { renewToken } from "../services/login";
import { AuthRouter } from './AuthRouter';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

   const {id} = useSelector(state => state.auth);
   const [loading, setLoading] = useState(true)

   const dispatch = useDispatch();
  useEffect(() => {
    async function validarAuth() {
      // debugger;
      await dispatch(renewToken());
      setLoading(false);
    }
    validarAuth();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                    path="/auth" 
                    component={AuthRouter} 
                    isAuthenticated={!!id}
                    />

                    <PrivateRoute
                     path="/dashboard" 
                     component={DashboardRouter}
                     isAuthenticated={!!id}
                     />

                    <Redirect to="/auth/login" />

                </Switch>

            </div>
        </Router>


    )
}
