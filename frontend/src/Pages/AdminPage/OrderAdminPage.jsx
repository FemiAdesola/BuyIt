import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { FaTimes, FaTrash} from 'react-icons/fa';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import Message from "../../Components/Message";
import Loader from "../../Components/Loader";
import { useGetAllOrdersQuery, useDeleteOrderMutation } from '../../Redux/slice/orderApiSlice';
import PaginationComponent from '../../Components/PaginationComponent';

export const OrderAdminPage = () => {
  const {pageNumber} = useParams();
    const { data, isLoading, refetch,error } = useGetAllOrdersQuery({pageNumber});

    const [deleteOrder] =
    useDeleteOrderMutation();
    // For deleting the order
    const deleteOrderHandler = async (id) => {
      if (window.confirm('Are you sure')) {
        try {
          await deleteOrder(id);
          toast.success("User deleted successfully");
          refetch();
        } catch (error) {
          toast.error(error?.data?.message || error.error);
        }
      }
    };
  return (
    <>
      <h1>Orders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                <Button
                        variant='white'
                        className='btn-sm'
                        onClick={() => deleteOrderHandler(order._id)}
                      >
                        <FaTrash style={{ color: 'red' }} />
                      </Button>
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <PaginationComponent
            pages={data.pages}
            page={data.page}
            isAdmin={true}
          />
      </>
      )}
    </>
  )
}
